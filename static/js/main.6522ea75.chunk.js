(this.webpackJsonpweathery=this.webpackJsonpweathery||[]).push([[0],{198:function(e,t,n){"use strict";n.r(t);var c,r,i=n(42),s=n.n(i),a=n(229),j=n(6),o=n(1),l=n(231),d=n(220),b=n(228),x=n(215),O=n(106),h=n.n(O),g=n(78),u=n(43),p=n.n(u),f=n(79),m=n(133),y=n.n(m),C=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.lat,c=t.lng,e.next=3,y.a.get("https://api.openweathermap.org/data/2.5/onecall",{params:{lat:n,lon:c,appid:"8128f6d612d3981a1bcc39e4639592d3"}});case 3:return r=e.sent,i=r.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(232),v=n(218),z=n(214),k=n(216),S=n(217),A=n(233),L=n(213),M=n(144),_=n(86),D={"01d":"linear(to-tr, yellow.300, red.500)","01n":"linear(to-tr, gray.700, black)","02d":"linear(to-tr, gray.400, gray.500)","02n":"linear(to-tr, gray.700, black)","03d":"linear(to-tr, gray.500, gray.600)","03n":"linear(to-tr, gray.700, black)","04d":"linear(to-tr, gray.500, gray.700)","04n":"linear(to-tr, gray.700, black)","09d":"linear(to-tr, blue.600, gray.600)","09n":"linear(to-tr, gray.700, black)","10d":"linear(to-tr, blue.600, gray.600)","10n":"linear(to-tr, gray.700, black)","11d":"linear(to-tr, blue.700, gray.700)","11n":"linear(to-tr, gray.700, black)","13d":"linear(to-tr, blue.300, blue.50)","13n":"linear(to-tr, gray.700, black)","50d":"linear(to-tr, gray.400, gray.500)","50n":"linear(to-tr, gray.700, black)"},I=n(2),F=function(e){var t=e.forecast,n=e.setSettingsShown,c=e.settingsShown,r=Object(o.useContext)(Ce),i=r.degree,s=r.setDegree,a=Object(M.d)(!1,!0),j=Object(M.c)().toggleColorMode;return Object(I.jsx)(L.a,{in:c,direction:"right",style:{zIndex:5,display:"flex",justifyContent:"flex-end"},onClick:function(){return n(!1)},unmountOnExit:!0,children:Object(I.jsxs)(z.a,{bgGradient:D[t.weather[0].icon],color:"n"===t.weather[0].icon[2]?"gray.500":"",w:"3xs",height:"full",px:5,pb:40,onClick:function(e){return e.stopPropagation()},children:[Object(I.jsx)(w.a,{position:"absolute",right:[4,6,8,10],top:[4,6,8,10],zIndex:10,"aria-label":"settings",variant:"ghost",onClick:function(){return n(!1)},icon:Object(I.jsx)(_.a,{size:38})}),Object(I.jsxs)(k.a,{alignItems:"center",justifyContent:"space-around",mt:24,px:6,children:[Object(I.jsx)(S.a,{children:"C"}),Object(I.jsx)(A.a,{size:"lg","aria-label":"Change to Fahrenheit",onChange:function(){return s("C"===i?"F":"C")}}),Object(I.jsx)(S.a,{children:"F"})]}),Object(I.jsxs)(k.a,{alignItems:"center",flexDirection:"column",justifyContent:"center",mt:6,children:[Object(I.jsx)(v.a,{htmlFor:"dark",children:Object(I.jsx)(S.a,{size:"md",children:"Dark mode"})}),Object(I.jsx)(A.a,{size:"lg","aria-label":"Dark mode",id:"dark",isChecked:a,onChange:j})]})]})})},E=n(32),P=n(236),H=n(221),R=n(219),N=n(92),T=n.n(N),Y=".5rem",B="all .2s ease",G=function(e){var t=e.setCoords,n=Object(o.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],s=Object(o.useState)({lat:0,lng:0}),a=Object(j.a)(s,2),l=a[0],b=a[1],O=function(){var e=Object(f.a)(p.a.mark((function e(n){var c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.geocodeByAddress)(n);case 2:return c=e.sent,e.next=5,Object(N.getLatLng)(c[0]);case 5:r=e.sent,t(r),i("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude};n&&(t(n),b(n))}))}),[]),Object(I.jsx)(T.a,{value:r,onChange:i,onSelect:O,searchOptions:{location:new google.maps.LatLng(l),radius:2e3},children:function(e){var t=e.getInputProps,n=e.suggestions,c=e.getSuggestionItemProps,r=e.loading;return Object(I.jsxs)(z.a,{px:[5,10],position:"relative",children:[Object(I.jsx)(P.a,Object(E.a)({},t({placeholder:"Search location"}))),Object(I.jsx)(R.a,{in:r,unmountOnExit:!0,children:Object(I.jsx)(d.a,{mt:4,children:Object(I.jsx)(x.a,{})})}),Object(I.jsx)(R.a,{in:!!n.length,unmountOnExit:!0,children:Object(I.jsx)(H.a,{zIndex:100,w:"100%",spacing:2,border:"1px",borderColor:"gray.200",p:2,borderRadius:4,children:n.map((function(e,t){var n={padding:".5rem",borderRadius:Y,backgroundColor:e.active?"#e6e6e6":""};return Object(o.createElement)(H.b,Object(E.a)(Object(E.a)({},c(e,{style:n})),{},{key:t}),e.description)}))})})]})}})},X=n(107),Z={height:"100%",width:"100%",borderRadius:Y},W={streetViewControl:!1},J=function(e){var t=e.coords,n=e.setCoords,c=t;return 0===t.lat&&0===t.lng&&(c={lat:52.2297,lng:21.0122}),Object(I.jsx)(z.a,{h:500,children:Object(I.jsx)(X.a,{zoom:8,center:c,onClick:function(e){n({lat:e.latLng.lat(),lng:e.latLng.lng()})},mapContainerStyle:Z,options:W,children:Object(I.jsx)(X.b,{position:c})})})},V=function(e){var t=e.changingLocation,n=e.location,c=e.coords,r=e.setCoords,i=e.setChangingLocation,s=Object(M.d)("white","gray.800");return Object(I.jsx)(L.a,{in:t,direction:"top",style:{zIndex:5},children:Object(I.jsxs)(z.a,{bgColor:s,w:"full",height:"full",px:5,pb:40,children:[Object(I.jsx)(S.a,{size:"xl",textAlign:"center",pt:5,cursor:"pointer",onClick:function(){return"No location selected"!==n&&i(!1)},children:n}),Object(I.jsx)(G,{setCoords:r}),Object(I.jsx)(z.a,{p:[5,10],height:"sm",children:Object(I.jsx)(J,{coords:c,setCoords:r})})]})})},K=n(230),Q=n(136),U=n(234),q=n(224),$=n(223),ee=n(87),te=function(e,t){return"C"===e?Math.round(t-273.15):Math.round(9*(t-273.15)/5+32)},ne=n(19),ce={"01d":Object(I.jsx)(ne.e,{size:"100%"}),"01n":Object(I.jsx)(ne.i,{size:"100%"}),"02d":Object(I.jsx)(ne.c,{size:"100%"}),"02n":Object(I.jsx)(ne.j,{size:"100%"}),"03d":Object(I.jsx)(ne.a,{size:"100%"}),"03n":Object(I.jsx)(ne.a,{size:"100%"}),"04d":Object(I.jsx)(ne.b,{size:"100%"}),"04n":Object(I.jsx)(ne.b,{size:"100%"}),"09d":Object(I.jsx)(ne.l,{size:"100%"}),"09n":Object(I.jsx)(ne.l,{size:"100%"}),"10d":Object(I.jsx)(ne.d,{size:"100%"}),"10n":Object(I.jsx)(ne.k,{size:"100%"}),"11d":Object(I.jsx)(ne.o,{size:"100%"}),"11n":Object(I.jsx)(ne.o,{size:"100%"}),"13d":Object(I.jsx)(ne.n,{size:"100%"}),"13n":Object(I.jsx)(ne.n,{size:"100%"}),"50d":Object(I.jsx)(ne.f,{size:"100%"}),"50n":Object(I.jsx)(ne.f,{size:"100%"})},re=function(e){var t=Object(o.useContext)(Ce).degree;return Object(I.jsxs)(z.a,{px:[5,10],children:[Object(I.jsxs)(z.a,{children:[Object(I.jsxs)(k.a,{justify:"center",alignItems:"center",children:[Object(I.jsxs)(U.a,{height:16,alignItems:"center",spacing:2,mr:[2,10],children:[Object(I.jsxs)(S.a,{size:"4xl",children:[te(t,e.temp),"\xb0"]}),Object(I.jsx)($.a,{orientation:"vertical",borderColor:"black",opacity:.2}),Object(I.jsx)(S.a,{size:"lg",children:e.weather[0].main})]}),Object(I.jsx)(z.a,{w:24,h:24,children:ce[e.weather[0].icon]})]}),Object(I.jsxs)(S.a,{size:"md",textAlign:"center",mt:3,children:["Feels like ",te(t,e.feels_like),"\xb0"]})]}),Object(I.jsxs)(k.a,{mt:5,w:[200,200,300],ml:"50%",transform:"translateX(-50%)",children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Precipitation"}),Object(I.jsxs)(q.d,{children:[(100*e.pop).toFixed(0),"%"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Wind"}),Object(I.jsx)(q.d,{children:Object(I.jsxs)(k.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[e.wind_speed," m/s",Object(I.jsx)(z.a,{transform:"rotate(".concat(e.wind_deg-45,"deg)"),children:Object(I.jsx)(ee.a,{size:32})})]})})]})]})]})},ie=function(e){var t=e.forecast,n=e.setChangingLocation,c=e.setSettingsShown,r=e.setHeight,i=e.location,s=e.fetchForecast,a=Object(Q.a)({onResize:function(e){e.height&&r(e.height)}}).ref,j=Object(K.a)();return Object(o.useEffect)((function(){setTimeout((function(){return j({duration:null,render:function(){return Object(I.jsx)(z.a,{color:"white",p:3,bg:"blue.300",borderRadius:Y,px:5,onClick:function(){s(),j.closeAll()},children:Object(I.jsx)(S.a,{size:"sm",children:"Click to update wether"})})}})}),2e3)}),[]),Object(I.jsx)(z.a,{bgGradient:t?D[t.current.weather[0].icon]:D["03d"],position:"fixed",width:"full",ref:a,top:0,color:t&&"n"===t.current.weather[0].icon[2]?"gray.500":"gray.800",pb:[100,200,300,400],children:Object(I.jsxs)(z.a,{p:[5,10],position:"relative",pb:0,children:[Object(I.jsx)(S.a,{size:"xl",textAlign:"center",cursor:"pointer",mt:12,onClick:function(){return n(!0)},children:i}),Object(I.jsx)(w.a,{position:"absolute",right:[4,6,8,10],top:[4,6,8,10],zIndex:5,"aria-label":"settings",variant:"ghost",onClick:function(){return c(!0)},icon:Object(I.jsx)(_.b,{size:38})}),Object(I.jsx)(re,Object(E.a)(Object(E.a)({},t.current),{},{feels_like:t.daily[0].feels_like.day,pop:t.daily[0].pop}))]})})},se=n(91),ae=n(62),je=n(225),oe=n(235),le=n(108),de=ae.a.svg(c||(c=Object(se.a)(["\n  display: block;\n  left: 0;\n  transform: rotate(180deg) translateY(1px);\n"]))),be=function(e){var t=Object(o.useContext)(Ce).degree,n=new Date(1e3*e.sunrise),c=new Date(1e3*e.sunset),r=new Date(1e3*e.moonrise),i=new Date(1e3*e.moonset),s=Object(M.d)("#fff","#171923");return Object(I.jsx)(g.Parallax,{y:[20,0],styleOuter:{marginTop:"-4rem"},children:Object(I.jsxs)(z.a,{bgGradient:D[e.weather[0].icon],pb:10,color:"gray.800",children:[Object(I.jsx)(de,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(I.jsx)("path",{fill:s,style:{transition:B},fillOpacity:"1",d:"M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,106.7C672,96,768,96,864,112C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})}),Object(I.jsx)(S.a,{size:"xl",textAlign:"center",mt:-2,children:"Details"}),Object(I.jsxs)(z.a,{w:{lg:350},ml:{lg:"50%"},transform:{lg:"translateX(-50%)"},children:[Object(I.jsxs)(k.a,{mt:5,px:["10vw","20vw","30vw",0],children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:Object(I.jsx)(d.a,{children:Object(I.jsx)(le.a,{size:24})})}),Object(I.jsxs)(q.d,{children:[n.getHours(),":",n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes()]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:Object(I.jsx)(d.a,{children:Object(I.jsx)(le.b,{size:24})})}),Object(I.jsxs)(q.d,{children:[c.getHours(),":",c.getMinutes()<10?"0"+c.getMinutes():c.getMinutes()]})]})]}),Object(I.jsx)(d.a,{children:Object(I.jsx)($.a,{borderColor:"black",opacity:.1,w:64,py:2})}),Object(I.jsxs)(oe.a,{mt:5,px:["10vw","20vw","30vw",0],columns:3,spacing:2,children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Pressure"}),Object(I.jsx)(q.d,{children:e.pressure})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Rain"}),Object(I.jsxs)(q.d,{children:[(100*e.pop).toFixed(),"%"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Clouds"}),Object(I.jsxs)(q.d,{children:[e.clouds,"%"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"UV"}),Object(I.jsx)(q.d,{children:e.uvi})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Humidity"}),Object(I.jsxs)(q.d,{children:[e.humidity,"%"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Dew point"}),Object(I.jsxs)(q.d,{children:[te(t,e.dew_point),"\xb0"]})]})]}),Object(I.jsx)(d.a,{children:Object(I.jsx)($.a,{borderColor:"black",opacity:.1,w:64,py:2})}),Object(I.jsx)(S.a,{size:"md",textAlign:"center",mt:5,children:"Temperature"}),Object(I.jsxs)(k.a,{px:["10vw","20vw","30vw",0],mt:2,children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Morning"}),Object(I.jsxs)(q.d,{children:[te(t,e.temp.morn),"\xb0"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Day"}),Object(I.jsxs)(q.d,{children:[te(t,e.temp.day),"\xb0"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Evening"}),Object(I.jsxs)(q.d,{children:[te(t,e.temp.eve),"\xb0"]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:"Night"}),Object(I.jsxs)(q.d,{children:[te(t,e.temp.night),"\xb0"]})]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:Object(I.jsx)(S.a,{size:"sm",textAlign:"center",mt:5,children:"Wind"})}),Object(I.jsx)(q.d,{children:Object(I.jsxs)(k.a,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[e.wind_speed," m/s",Object(I.jsx)(z.a,{transform:"rotate(".concat(e.wind_deg-45,"deg)"),children:Object(I.jsx)(ee.a,{size:32})})]})})]}),Object(I.jsxs)(k.a,{mt:5,px:["10vw","20vw","30vw",0],children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:Object(I.jsx)(d.a,{children:Object(I.jsx)(ne.g,{size:34})})}),Object(I.jsxs)(q.d,{children:[r.getHours(),":",r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes()]})]}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsx)(q.c,{children:Object(I.jsx)(d.a,{children:Object(I.jsx)(ne.h,{size:34})})}),Object(I.jsxs)(q.d,{children:[i.getHours(),":",i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes()]})]})]})]})]})})},xe=function(e){var t=e.children,n=e.title,c=e.margin,r=void 0===c?14:c;return Object(I.jsxs)(z.a,{mb:r,w:{md:500,lg:750},ml:{md:"50%"},transform:{md:"translateX(-50%)"},px:[5,10],position:"relative",zIndex:1,children:[Object(I.jsx)(S.a,{mb:4,children:n}),Object(I.jsx)(U.a,{spacing:6,overflowX:"scroll",px:2,pb:4,children:t})]})},Oe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],he=function(e){var t=Object(o.useContext)(Ce).degree,n=Object.values(e),c=Object(o.useState)(0),r=Object(j.a)(c,2),i=r[0],s=r[1],a=Object(o.useState)(!1),l=Object(j.a)(a,2),d=l[0],b=l[1],x=Object(M.d)("gray.100","gray.700");return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(xe,{title:"Forecast",margin:-6,children:n.map((function(e,c){var r=new Date(1e3*e.dt);return Object(I.jsxs)(o.Fragment,{children:[Object(I.jsxs)(k.a,{flexDirection:"column",alignItems:"center",p:4,bgColor:c===i?x:"transparent",borderRadius:Y,cursor:"pointer",onClick:function(){return function(e){b(!0),setTimeout((function(){s(e),b(!1)}),200)}(c)},transition:"all .2s",children:[Object(I.jsx)(z.a,{w:12,h:12,children:ce[e.weather[0].icon]}),Object(I.jsx)($.a,{borderColor:"black",opacity:.1,my:2}),Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsxs)(q.d,{children:[te(t,e.temp.day),"\xb0"]}),Object(I.jsx)(q.c,{children:0===c?"Today":Oe[r.getDay()]})]})]}),c!==n.length-1&&Object(I.jsx)($.a,{orientation:"vertical",height:20,borderColor:"black",opacity:.1})]},c)}))}),Object(I.jsx)(je.a,{in:!d,children:Object(I.jsx)(be,Object(E.a)({},n[i]))})]})},ge=n(226),ue=function(e){var t=Object(o.useContext)(Ce).degree;return Object(I.jsx)(xe,{title:"Hour",children:function(){var n=Object.values(e);return n.map((function(e,c){var r=new Date(1e3*e.dt);return Object(I.jsxs)(o.Fragment,{children:[Object(I.jsxs)(q.a,{textAlign:"center",children:[Object(I.jsxs)(q.c,{fontSize:"lg",children:[r.getHours(),":00"]}),Object(I.jsx)(d.a,{w:12,h:12,children:ce[e.weather[0].icon]}),Object(I.jsxs)(q.d,{children:[te(t,e.temp),"\xb0"]}),Object(I.jsx)(q.b,{ml:-4,children:Object(I.jsx)(d.a,{children:Object(I.jsxs)(k.a,{alignItems:"center",children:[Object(I.jsx)(ne.m,{size:40}),Object(I.jsxs)(ge.a,{ml:-2,children:[(100*e.pop).toFixed(0),"%"]})]})})})]}),c!==n.length-1&&Object(I.jsx)($.a,{orientation:"vertical",height:20,borderColor:"black",opacity:.1})]},c)}))}()})},pe=ae.a.svg(r||(r=Object(se.a)(["\n  display: block;\n  left: 0;\n  transform: translateY(1px); // small fix on mobiles\n"]))),fe=function(e){var t=e.height,n=e.location,c=e.setChangingLocation,r=e.forecast,i=Object(M.d)("#fff","#171923");return Object(I.jsxs)(z.a,{transform:["translateY(".concat(t,"px)"),"translateY(".concat(t-80,"px)"),"translateY(".concat(t-100,"px)")],onClick:function(){return"No location selected"!==n&&c(!1)},children:[Object(I.jsx)(pe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(I.jsx)("path",{fill:i,fillOpacity:"1",style:{transition:B},d:"M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})}),Object(I.jsxs)(z.a,{bgColor:i,style:{transition:B},children:[Object(I.jsx)(ue,Object(E.a)({},r.hourly)),Object(I.jsx)(he,Object(E.a)({},r.daily))]})]})},me=n(227),ye=Object(me.a)({config:{initialColorMode:"light",useSystemColorMode:!0}}),Ce=Object(o.createContext)({degree:"C",setDegree:function(){}}),we=function(){var e=Object(o.useState)("C"),t=Object(j.a)(e,2),n={degree:t[0],setDegree:t[1]},c=Object(o.useState)("No location selected"),r=Object(j.a)(c,2),i=r[0],s=r[1],a=Object(o.useState)({lat:0,lng:0}),O=Object(j.a)(a,2),u=O[0],p=O[1],f=Object(o.useState)(!0),m=Object(j.a)(f,2),y=m[0],w=m[1],v=Object(o.useState)(),z=Object(j.a)(v,2),k=z[0],S=z[1],A=Object(o.useState)(!1),L=Object(j.a)(A,2),M=L[0],_=L[1],D=Object(o.useState)(!1),E=Object(j.a)(D,2),P=E[0],H=E[1],R=Object(o.useState)(0),N=Object(j.a)(R,2),T=N[0],Y=N[1],B=function(){_(!0),C(u).then((function(e){S(e),_(!1)}))};return Object(o.useEffect)((function(){h.a.setApiKey("AIzaSyAaNjFR_LN6izfmGEPx_1ZCYMkNfZhxSQs")}),[]),Object(o.useEffect)((function(){0===u.lat&&0===u.lng||(h.a.fromLatLng(u.lat.toString(),u.lng.toString()).then((function(e){var t="",n="",c="";e.results[0].address_components.forEach((function(e){e.types.forEach((function(r){switch(r){case"neighborhood":case"postal_town":case"sublocality":case"locality":t=e.long_name+",";break;case"administrative_area_level_1":case"administrative_area_level_2":n=e.long_name+",";break;case"country":c=e.long_name}}))})),s("".concat(t," ").concat(n," ").concat(c))})).catch((function(){})),B(),w(!1))}),[u]),Object(I.jsx)(g.ParallaxProvider,{children:Object(I.jsx)(l.a,{theme:ye,children:Object(I.jsxs)(Ce.Provider,{value:n,children:[Object(I.jsx)(V,{changingLocation:y,coords:u,setCoords:p,location:i,setChangingLocation:w}),k&&Object(I.jsx)(F,{forecast:k.current,setSettingsShown:H,settingsShown:P}),M?Object(I.jsx)(d.a,{h:"100vh",w:"100vw",children:Object(I.jsx)(x.a,{size:"xl"})}):k&&Object(I.jsxs)(b.a,{in:!M,unmountOnExit:!0,children:[Object(I.jsx)(ie,{forecast:k,location:i,setHeight:Y,setChangingLocation:w,setSettingsShown:H,fetchForecast:B}),Object(I.jsx)(fe,{height:T,setChangingLocation:w,location:i,forecast:k})]})]})})})},ve=document.getElementById("root");s.a.render(Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(a.a,{initialColorMode:ye.config.initialColorMode}),Object(I.jsx)(we,{})]}),ve)}},[[198,1,2]]]);
//# sourceMappingURL=main.6522ea75.chunk.js.map