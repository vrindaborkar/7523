(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[702],{4115:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return E}});var a=t(2791),r=t(7689),n=(0,a.createContext)(),i=t(1840),l=t(9439),c=t(4925),d=t(4387),o=t(6362),h=t(4475),u=t(184);function m(){var e=(0,a.useContext)(n),s=e.places,t=e.handleClickDrop,r=a.useState(""),i=(0,l.Z)(r,2),m=i[0],x=i[1];return(0,u.jsxs)(o.Z,{sx:{m:1,minWidth:120,maxWidth:300,alignSelf:"center"},size:"small",children:[(0,u.jsx)(c.Z,{id:"demo-select-small",children:"Market"}),(0,u.jsx)(h.Z,{labelId:"demo-select-small",id:"demo-select-small",value:m,label:"Value",onChange:function(e){x(e.target.value)},children:s&&s.map((function(e,s){return(0,u.jsx)(d.Z,{value:e,onClick:t,children:e},s)}))})]})}var x=t(8773),j=function(){var e=(0,a.useContext)(n),s=e.stallsData;e.Itemcount,e.handleClick;return(0,u.jsx)("div",{className:"products_page",children:(0,u.jsxs)("div",{className:"products_container",children:[s&&0!==s.length&&s.map((function(e,s){var t=null===x.itemsData||void 0===x.itemsData?void 0:x.itemsData.find((function(s){return s.label===e.commodity})),a=null===t||void 0===t?void 0:t.img;return(0,u.jsxs)("div",{className:"products",children:[(0,u.jsx)("img",{className:"img_products",alt:"gift",src:a}),(0,u.jsxs)("span",{className:"content_product",children:["Market : ",e.market]}),(0,u.jsxs)("span",{className:"content_product",children:["Commodity : ",e.commodity]}),(0,u.jsxs)("span",{className:"content_product",children:["Price : ",e.purchase_rate," / kg"]})]},s)})),s&&0===s.length&&(0,u.jsx)("div",{className:"products_non_container",children:(0,u.jsx)("h3",{children:"No stallsData available"})}),!s&&(0,u.jsx)(i.Z,{})]})})},p=function(){var e=(0,a.useContext)(n).places;return(0,u.jsxs)(u.Fragment,{children:[e&&0!==e.length&&(0,u.jsxs)("div",{className:"customerhome_component",children:[(0,u.jsx)("img",{alt:"Lifestyle Exhibition",className:"img-responsive",src:"../images/slidestall2.webp",width:"80%"}),(0,u.jsxs)("div",{className:"select_items",children:[(0,u.jsx)("label",{for:"cars",className:"places_head",children:"Select State "}),(0,u.jsxs)("select",{name:"cars",id:"cars",children:[(0,u.jsx)("option",{children:"Maharashtra"}),(0,u.jsx)("option",{children:"Gujarat"}),(0,u.jsx)("option",{children:"Kerala"}),(0,u.jsx)("option",{children:"Karnataka"})]})]}),(0,u.jsxs)("div",{className:"select",children:[(0,u.jsx)("label",{for:"cars",className:"places_head",children:"Select District"}),(0,u.jsxs)("select",{id:"cars",children:[(0,u.jsx)("option",{children:"Ahmednagar"}),(0,u.jsx)("option",{children:"Beed"}),(0,u.jsx)("option",{children:"Pune"}),(0,u.jsx)("option",{children:"Nagpur"})]})]}),(0,u.jsx)("h2",{className:"places_header",children:"Select market in pune!"}),(0,u.jsx)(m,{}),(0,u.jsx)(j,{})]}),!e&&(0,u.jsx)(i.Z,{})]})},g=t(5206),f=(t(5462),t(7762)),v=t(3433),b=t(4942),k=t(1413),N=t(6525),y=t(5653),w=function(e){var s=(0,a.useState)(),t=(0,l.Z)(s,2),r=t[0],i=t[1],c=(0,a.useState)(),d=(0,l.Z)(c,2),o=d[0],h=d[1],m=(0,a.useState)(),x=(0,l.Z)(m,2),j=x[0],p=x[1],g=(0,a.useState)(),w=(0,l.Z)(g,2),Z=w[0],C=w[1],S=(0,a.useState)(0),_=(0,l.Z)(S,2),T=_[0],R=_[1],D=(0,a.useState)([]),A=(0,l.Z)(D,2),H=A[0],O=A[1],I=(0,a.useState)({}),P=(0,l.Z)(I,2),q=P[0],F=P[1],Q=new Set,M=[];if(r){var B,z=(0,f.Z)(r);try{for(z.s();!(B=z.n()).done;){var L=B.value;Q.add(L.location)}}catch(E){z.e(E)}finally{z.f()}}var W,G=(0,f.Z)(Q);try{for(G.s();!(W=G.n()).done;){var U=W.value;M.push(U)}}catch(E){G.e(E)}finally{G.f()}(0,a.useEffect)((function(){N.Z.getMyStalls().then((function(e){return i(e.data)})),y.Z.getInOutdata().then((function(e){return h(e.data)}))}),[]),(0,a.useEffect)((function(){var e=o&&o.filter((function(e){return e.market==="".concat(j)}));C(e)}),[o,j]);return(0,u.jsx)(n.Provider,{value:{handleClick:function(e){var s=e.target.id;if(H&&0!==H.filter((function(e){return e._id==="".concat(s)})).length&&(R((function(e){return e+1})),F((function(e){return(0,k.Z)((0,k.Z)({},e),{},(0,b.Z)({},s,e[s]+1))})),alert("Added to Cart!!")),H&&0===H.filter((function(s){return s._id==="".concat(e.target.id)})).length){var t=Z&&Z.filter((function(s){return s._id==="".concat(e.target.id)})),a=(0,v.Z)(H);a.push.apply(a,(0,v.Z)(t)),O(a),R((function(e){return e+1})),F((function(s){return(0,k.Z)((0,k.Z)({},s),{},(0,b.Z)({},e.target.id,1))})),alert("Added to Cart!!")}},handleClickDrop:function(e){p(e.target.innerText)},Id:j,setId:p,stallsData:Z,setstallsData:C,Counter:q,setCounter:F,Itemcount:T,setItemcount:R,cartsData:H,setcartsData:O,places:M},children:e.children})},Z=(t(4569),t(4721)),C=t(1087);function S(e){return(0,u.jsx)("div",{className:"category",children:(0,u.jsxs)(C.rU,{className:"link",to:"props.link",children:[(0,u.jsx)("img",{src:e.imgsrc}),(0,u.jsxs)("h5",{children:[e.firstHalfTitle," ",(0,u.jsx)("br",{className:"title-br"})," ",e.secHalfTitle," "]})]})})}var _=t(5671),T=t(3144),R=t(136),D=t(7277),A=(t(4164),t(8040),t(197)),H=function(e){(0,R.Z)(t,e);var s=(0,D.Z)(t);function t(){return(0,_.Z)(this,t),s.apply(this,arguments)}return(0,T.Z)(t,[{key:"render",value:function(){return(0,u.jsxs)(A.lr,{autoPlay:!0,children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider3.jpg"})}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider1.png"})}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider2.jpg"})})]})}}]),t}(a.Component),O=H,I=function(e){(0,R.Z)(t,e);var s=(0,D.Z)(t);function t(){return(0,_.Z)(this,t),s.apply(this,arguments)}return(0,T.Z)(t,[{key:"render",value:function(){return(0,u.jsxs)(A.lr,{autoPlay:!0,children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider3.jpg"})}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider1.png"})}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://www.thefruitshop.in/images/header3/slider2.jpg"})})]})}}]),t}(a.Component),P=I,q=t(6355),F=t(6457),Q={orange:"#FFBA5A",green:"#3aa54b30"};var M={container:{display:"flex",flexDirection:"column",alignItems:"center"},textarea:{border:"2px solid #a9a9a9",borderRadius:15,width:400,margin:"20px 0",minHeight:200,padding:10,display:"block",fontSize:20},button:{border:"none",borderRadius:30,width:200,height:50,background:"linear-gradient(105.42deg, #3AA54B 33.61%, #107C55 80.31%)",color:"#fff",display:"block",margin:"auto"}},B=function(){var e=Array(5).fill(0),s=(0,a.useState)(e),t=(0,l.Z)(s,2),r=t[0],n=t[1],i=(0,a.useState)(""),c=(0,l.Z)(i,2),d=c[0],o=c[1],h=(0,a.useState)(""),m=(0,l.Z)(h,2),x=(m[0],m[1]);return(0,u.jsxs)("div",{style:M.container,children:[(0,u.jsx)(g.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",color:"success"}),(0,u.jsx)(g.Ix,{}),(0,u.jsxs)("p",{className:"feedback-para",children:["Your feedback will help us serve you better.",(0,u.jsx)("br",{})," Please share your experience below"]}),(0,u.jsxs)("form",{onSubmit:function(e){x(""),e.preventDefault(),0===d.length?x("Please Provide Feedback"):(x("no error"),F.Z.feedback(d).then((function(){g.Am.success("Feedback Send",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),(function(e){g.Am.warn("Feedback Not Send",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),o("")})))},children:[(0,u.jsx)("div",{className:"stars",style:M.stars,children:e.map((function(e,s){return(0,u.jsx)(q.QJe,{size:24,style:{marginRight:10,cursor:"pointer"},name:"star",color:r>s?Q.orange:Q.green,onClick:function(){n(s+1)}},s)}))}),(0,u.jsx)("textarea",{name:"feedback",value:d,onChange:function(e){return o(e.target.value)},placeholder:"What's Your Feedback",style:M.textarea}),(0,u.jsx)("button",{style:M.button,children:"Submit"})]})]})},z=t(4554),L=t(1896),W=(t(8253),{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",height:"60%",overflow:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4});function G(e){var s=e.handleOpen,t=e.handleClose,a=e.open;return(0,u.jsxs)("div",{style:{textAlign:"center",backgroundColor:"white"},children:[(0,u.jsx)("button",{className:"btn",onClick:s,children:"View Offers"}),(0,u.jsx)(L.Z,{open:a,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,u.jsx)(z.Z,{sx:W,children:(0,u.jsxs)("div",{className:"offers_modal_component",children:[(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]}),(0,u.jsxs)("div",{className:"offer-box",children:[(0,u.jsx)("p",{children:"Commodity : Tomato"}),(0,u.jsxs)("div",{className:"quan-rate",children:[(0,u.jsxs)("h6",{children:["Quantity ",(0,u.jsx)("span",{children:"50kg"})]}),(0,u.jsxs)("h6",{children:["Rate ",(0,u.jsx)("span",{children:"45Rs/kg"})]})]})]})]})})})]})}var U=function(){var e=(0,a.useState)(),s=(0,l.Z)(e,2),t=s[0],r=s[1],n=function(){return r(!0)},i=function(){return r(!1)};return(0,u.jsxs)("div",{className:"customers_landing_page",children:[(0,u.jsx)("div",{className:"offerCarousel-container",children:(0,u.jsx)(O,{})}),(0,u.jsx)(Z.Z,{className:"divider",textAlign:"left",children:"Live markets"}),(0,u.jsxs)("div",{className:"live-market",children:[(0,u.jsxs)("div",{className:"market",children:[(0,u.jsx)("img",{src:"https://media.timeout.com/images/105263065/750/422/image.jpg"}),(0,u.jsx)("h5",{children:"Market Name"}),(0,u.jsx)("p",{children:"00:00 am - 00:00 pm"}),(0,u.jsxs)("div",{className:"btn-holder",children:[(0,u.jsx)(G,{handleClose:i,handleOpen:n,open:t}),(0,u.jsx)("button",{className:"btn",children:"Get Direction"})]})]}),(0,u.jsxs)("div",{className:"market",children:[(0,u.jsx)("img",{src:"https://media.timeout.com/images/105263065/750/422/image.jpg"}),(0,u.jsx)("h5",{children:"Market Name"}),(0,u.jsx)("p",{children:"00:00 am - 00:00 pm"}),(0,u.jsxs)("div",{className:"btn-holder",children:[(0,u.jsx)(G,{handleClose:i,handleOpen:n,open:t}),(0,u.jsx)("button",{className:"btn",children:"Get Direction"})]})]}),(0,u.jsxs)("div",{className:"market",children:[(0,u.jsx)("img",{src:"https://media.timeout.com/images/105263065/750/422/image.jpg"}),(0,u.jsx)("h5",{children:"Market Name"}),(0,u.jsx)("p",{children:"00:00 am - 00:00 pm"}),(0,u.jsxs)("div",{className:"btn-holder",children:[(0,u.jsx)(G,{handleClose:i,handleOpen:n,open:t}),(0,u.jsx)("button",{className:"btn",children:"Get Direction"})]})]})]}),(0,u.jsx)(Z.Z,{className:"divider",textAlign:"left",children:"Product Categories"}),(0,u.jsx)("div",{className:"product-categories",children:(0,u.jsxs)("div",{className:"categories-holder",children:[(0,u.jsx)(S,{link:"./customerhome",imgsrc:"https://post.healthline.com/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg",firstHalfTitle:"Fruits And",secHalfTitle:"Vegetables"}),(0,u.jsx)(S,{link:"./customersnacks",imgsrc:"https://cdn.shopify.com/s/files/1/0405/5164/5352/files/banner_300x.jpg?v=1647631081",firstHalfTitle:"Snacks"}),(0,u.jsx)(S,{imgsrc:"https://pibindia.files.wordpress.com/2016/12/istock_000020447381_medium.jpg?w=1400",firstHalfTitle:"Pulses &",secHalfTitle:"Grains"}),(0,u.jsx)(S,{imgsrc:"https://static.vecteezy.com/system/resources/thumbnails/007/558/975/small/nature-organic-product-logo-with-hand-and-leaf-design-template-free-vector.jpg",firstHalfTitle:"Organic",secHalfTitle:"Products"}),(0,u.jsx)(S,{imgsrc:"https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg",firstHalfTitle:"Dairy",secHalfTitle:"Products"}),(0,u.jsx)(S,{imgsrc:"https://m.media-amazon.com/images/I/71RySHlAMbL._UY550_.jpg",firstHalfTitle:"Fashion"}),(0,u.jsx)(S,{imgsrc:"https://m.media-amazon.com/images/I/91gbfULvW0L._AC_SL1500_.jpg",firstHalfTitle:"Toys & ",secHalfTitle:"Baby Products"}),(0,u.jsx)(S,{imgsrc:"https://imgmedia.lbb.in/media/2019/08/5d596136e2f8fb4ec61e9405_1566138678272.jpg",firstHalfTitle:"Furniture"}),(0,u.jsx)(S,{imgsrc:"https://www.popoptiq.com/wp-content/uploads/2019/01/13-26-1.jpg.webp",firstHalfTitle:"Fun & ",secHalfTitle:"Entertaimentniture"})]})}),(0,u.jsx)(Z.Z,{className:"divider",textAlign:"left",children:"Top Selling Products"}),(0,u.jsxs)("div",{className:"top-product",children:[(0,u.jsxs)("div",{className:"product",children:[(0,u.jsx)("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg"}),(0,u.jsx)("h5",{children:"Carrots"})]}),(0,u.jsxs)("div",{className:"product",children:[(0,u.jsx)("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg"}),(0,u.jsx)("h5",{children:"Carrots"})]}),(0,u.jsxs)("div",{className:"product",children:[(0,u.jsx)("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg"}),(0,u.jsx)("h5",{children:"Carrots"})]}),(0,u.jsxs)("div",{className:"product",children:[(0,u.jsx)("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg"}),(0,u.jsx)("h5",{children:"Carrots"})]})]}),(0,u.jsx)("div",{className:"banner-carousel-container",children:(0,u.jsx)(P,{})}),(0,u.jsx)(Z.Z,{className:"divider",textAlign:"left",children:"Feedback"}),(0,u.jsx)("div",{className:"feedback-container",children:(0,u.jsx)(B,{})})]})};(0,t(7107).Z)({typography:{fontSize:15}});var E=function(){return(0,u.jsx)(w,{children:(0,u.jsxs)(r.Z5,{children:[(0,u.jsx)(r.AW,{path:"/",element:(0,u.jsx)(U,{})}),(0,u.jsx)(r.AW,{path:"/customerhome",element:(0,u.jsx)(p,{})})]})})}},8773:function(){},6525:function(e,s,t){"use strict";var a=t(4569),r=t.n(a),n=t(6456),i="https://wingrowmarket.com:8443/",l={postInward:function(e,s,t,a,l){return r().post(i+"inward",{commodity:e,purchase_quantity:s,purchase_rate:t,market:a,time:l},{headers:(0,n.Z)()})},postOutward:function(e,s,t,a,l){return r().post(i+"outward",{commodity:e,sales_quantity:s,sales_rate:t,market:a,time:l},{headers:(0,n.Z)()})},getInward:function(){return r().get(i+"inward",{headers:(0,n.Z)()})},getOutward:function(){return r().get(i+"outward",{headers:(0,n.Z)()})},getMyStalls:function(){return r().get(i+"stalls",{headers:(0,n.Z)()})},getInwardData:function(){return r().get(i+"inwardData",{headers:(0,n.Z)()})},getOutwardData:function(){return r().get(i+"outwardData",{headers:(0,n.Z)()})},getBookedStalls:function(){return r().get(i+"bookedstalls",{headers:(0,n.Z)()})},getcancelledStalls:function(){return r().get(i+"cancelledstalls",{headers:(0,n.Z)()})}};s.Z=l},5653:function(e,s,t){"use strict";var a=t(4569),r=t.n(a),n=t(6456),i="https://wingrowmarket.com:8443/",l={getPublicContent:function(){return r().get(i+"all")},getStallsData:function(){return r().get(i+"stalls",{headers:(0,n.Z)()})},getAdminData:function(){return r().get(i+"admin",{headers:(0,n.Z)()})},getInOutdata:function(){return r().get(i+"inwardoutward",{headers:(0,n.Z)()})},getFarmers:function(){return r().get(i+"farmer",{headers:(0,n.Z)()})},getAllUsers:function(){return r().get(i+"allusers",{headers:(0,n.Z)()})},getUsers:function(){return r().get(i+"users",{headers:(0,n.Z)()})},getSub:function(e){return r().post("https://wingrowmarket.com:8443/sub1",{userId:e})},postSub:function(e,s,t,a){return r().post(i+"sub",{date:e,userId:s,stalls:t,validity:a},{headers:(0,n.Z)()})}};s.Z=l},8253:function(){}}]);
//# sourceMappingURL=702.e84395da.chunk.js.map