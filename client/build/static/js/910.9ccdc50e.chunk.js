"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[910],{7910:function(e,a,l){l.r(a),l.d(a,{default:function(){return P}});var s=l(4942),n=l(1413),r=l(3433),o=l(9439),i=l(2791),t=l(6151),c=l(7391),d=l(1889),u=l(890),m=l(4925),b=l(4387),p=l(6362),h=l(4475),g=l(7689),f=l(1087),x=l(6457),j=l(8704),y=l(1840),v=l(5206),C=(l(5462),l(9462)),S=(l(2339),l(184)),Z=x.Z.getCurrentUser(),w=[{label:"Amaranthus"},{label:"Beet Root"},{label:"Chukka- sorrel Leaves"},{label:"Colocasia Leaves"},{label:"Curry Leaves"},{label:"Dill"},{label:"Fenugreek Leaves"},{label:"Green Amaranth"},{label:"Spinach"},{label:"Spring Onion"},{label:"Sufflower"},{label:"Chilli"},{label:" Colocasia Roots"},{label:"Cucumber Madras"},{label:"Kohlrabi"},{label:"Onion White-Pandhara Kanda"},{label:"Pointed Gourd"},{label:"Pumpkin"},{label:"Raw Jackfruit"},{label:"Raw Papaya"},{label:"Sambhar Kanda"},{label:"Snake Gourd"},{label:"Spiny Gourd"},{label:"Sweet Potato"},{label:"Yam"},{label:"Asparagus"},{label:"Avocado"},{label:"Baby Corn"},{label:"Baby Potato"},{label:"Basil"},{label:"Broccoli"},{label:"Celery"},{label:"Cherry Tomato"},{label:"chinese Cabbage"},{label:"Coccinia"},{label:"Green Zucchini"},{label:"Iceberg Lettuce"},{label:"Parsley"},{label:"Red Cabbage"},{label:"Red Capsicum"},{label:"Romaine Lettuce"},{label:"Yellow Capsicum"},{label:"Yellow Zucchini"},{label:"Mushroom"},{label:"Sweet Corn"},{label:"Sweet Corn Grains"},{label:"Cabbage"},{label:"Potato (Agra)"},{label:"Potato (Indore)"},{label:"Potato (Talegav)"},{label:"Beans Double"},{label:"Bitter Gourd"},{label:"Brinjal Big"},{label:"Brinjal Green"},{label:"Brinjal Long Green"},{label:"Brinjal Purple"},{label:"Carrot"},{label:"Cauliflower"},{label:"Chavali Beans"},{label:"Chickpeas - Chana sprouts"},{label:"chilli - Bhavgagari Mirchi"},{label:"Chilli Green"},{label:"chilli Simple"},{label:"Cluster Beans"},{label:"Coconut"},{label:"Colocasia Roots"},{label:"Coriander"},{label:"Cucumber"},{label:"Cucumder Madras"},{label:"Cucumber Madras- Sambar Kakadi"},{label:"Cucumber Polyhouse- English Kakadi"},{label:"Drum Sticks"},{label:"Field Beans"},{label:"Fresh Peeled Green Peas"},{label:"Garlic"},{label:"Ginger"},{label:"Green Capsicum"},{label:"Green Mango"},{label:"Green Peas"},{label:"Groundnut Pods"},{label:"Tamarind"},{label:"Lady Finger"},{label:"Lemon Grass"},{label:"Mint"},{label:"Onion"},{label:"Onion Sambhar"},{label:"Lima Beans"},{label:"Peeled Garlic"},{label:"Potato"},{label:"Radish"},{label:"Ridgegourd"},{label:"Sponge Gourd"},{label:"Tomato"},{label:"Wal"},{label:"Wal Broad"},{label:"Wal surati"},{label:"Water Chestnuts"},{label:"Apple Fuji"},{label:"Apple Green"},{label:"Apple Kinnaur"},{label:"Apple Red Delicious"},{label:"Apple Shimla Big"},{label:"Kiwi"},{label:"Litchi"},{label:"Strawberry"},{label:"Grapes Black"},{label:"Grapes Green"},{label:"Jambhul"},{label:"Mango Badami (For Juice)"},{label:"Mango Devgad Hapus"},{label:"Mango Keshar"},{label:"Mango Lalbag"},{label:"Mango Payri"},{label:"Mango Ratnagiri Hapus"},{label:"Mango Totapuri"},{label:"Muskmelon"},{label:"Watermelon Kiran"},{label:"Watermelon Regular"},{label:"Amla"},{label:"Apple Gourd"},{label:"Ashgourd"},{label:"Banana"},{label:"Custard-apple"},{label:"Elaichi Banana"},{label:"Figs"},{label:"Guava"},{label:"Jackfruit Peeled"},{label:"Jujube - Ber"},{label:"Orange Small"},{label:"Orange Kinnow"},{label:"Papaya"},{label:"Pear Imported"},{label:"Pomogranate"},{label:"Raw Banana"},{label:"Sapodilla"},{label:"Sugarcane"},{label:"Sweet Lime"},{label:"Tender"}];function P(e){e.t,e.languages;var a=1,l=w.map((function(e){return{id:String(a++),text:e.label}}));console.log(l),(0,i.useEffect)((function(){Z&&(x.Z.logout(),window.location.reload())}),[]);var P=(0,g.s0)(),N=(0,i.useState)(!1),A=(0,o.Z)(N,2),F=A[0],B=A[1],O=(0,i.useState)({phone:"",password:"",firstname:"",lastname:"",type:"",farmertype:"",address:""}),k=(0,o.Z)(O,2),z=k[0],G=k[1],R=i.useState([]),T=(0,o.Z)(R,2),W=T[0],M=T[1],L=(0,i.useState)(),I=(0,o.Z)(L,2),K=(I[0],I[1],(0,i.useState)("")),D=(0,o.Z)(K,2),V=D[0],U=D[1],E=(0,i.useState)(!1),H=(0,o.Z)(E,2),J=H[0],q=H[1],Y=function(e){var a=e.target,l=a.name,r=a.value;G((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,s.Z)({},l,r))}))},_=function(){window.recaptchaVerifier=new C.Z.auth.RecaptchaVerifier("sign-in-button",{size:"invisible",callback:function(e){Q(),console.log("Recaptcha Verified")},defaultCountry:"IN"})},Q=function(e){e.preventDefault(),console.log("here"),_(),q(!0),setTimeout((function(){q(!1)}),5e3);var a="+91"+z.phone;console.log(a);var l=window.recaptchaVerifier;C.Z.auth().signInWithPhoneNumber(a,l).then((function(e){v.Am.success("OTP SENT!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),window.confirmationResult=e,console.log("OTP has been sent")})).catch((function(e){console.log("SMS Not Sent"),v.Am.warn("Invalid Phone Number",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),G({phone:"",password:"",firstname:"",lastname:"",type:"",farmertype:"",address:""}),setTimeout((function(){window.location.reload(!1)}),1e3)}))},X=(0,i.useState)(!0),$=(0,o.Z)(X,2),ee=($[0],$[1],(0,i.useState)(!0)),ae=(0,o.Z)(ee,2),le=(ae[0],ae[1],(0,i.useState)(!1)),se=(0,o.Z)(le,2),ne=(se[0],se[1],(0,i.useState)(!1)),re=(0,o.Z)(ne,2),oe=(re[0],re[1],(0,i.useState)(!1)),ie=(0,o.Z)(oe,2);ie[0],ie[1],(0,i.useRef)(null);return(0,S.jsxs)("div",{className:"authContainer",children:[(0,S.jsx)(v.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",color:"success"}),(0,S.jsx)(v.Ix,{}),F?(0,S.jsx)(y.Z,{}):(0,S.jsxs)("div",{className:"authbox",children:[(0,S.jsx)("img",{className:"login_image",src:"./images/2.png",alt:"logo"}),(0,S.jsxs)("form",{className:"register_details",component:"form",noValidate:!0,onSubmit:function(e){console.log("inside handleSubmit"),U(""),e.preventDefault();var a=z.phone,l=z.firstname,s=z.lastname,n=z.farmertype,r=z.type;a.match("[0-9]{10}")?0===l.length&&0===s.length?U("Please provide valid first and last name"):0===r.length?U("Please select type"):"farmer"===r&&0===n.length?U("select producer type"):"farmer"===r&&0===W.length?U("select atleast one commodity and press enter"):(U("no error"),B(!0),x.Z.register(z.phone,z.password,z.firstname,z.lastname,z.type,z.farmertype,z.address,W).then((function(){v.Am.success("Registration successful!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout((function(){P("/registeration-successfull"),window.location.reload()}),1e3)}),(function(e){v.Am.warn("User Already Exists",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),G({phone:"",password:"",firstname:"",lastname:"",type:"",farmertype:"",address:""}),setTimeout((function(){P("/login"),window.location.reload()}),1e3)}))):U("Please provide valid phone number")},sx:{mt:3},children:[(0,S.jsx)("div",{id:"sign-in-button"}),(0,S.jsx)("img",{className:"form-logo",src:".\\images\\logo.png",alt:"form-logo"}),(0,S.jsx)(u.Z,{className:"form-heading",component:"h1",variant:"h5",children:(0,S.jsx)("span",{className:"heading",children:"Welcome to Wingrow Agritech"})}),(0,S.jsx)(u.Z,{className:"form-heading",mt:2,component:"h1",variant:"h5",children:(0,S.jsx)("span",{className:"heading",children:"Signup with us"})}),(0,S.jsxs)(d.ZP,{className:"input-div-holder",container:!0,spacing:2,children:[(0,S.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},autoComplete:"nope",name:"firstname",value:z.firstname,onChange:Y,required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"success",className:"textfield"})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastname",value:z.lastname,onChange:Y,autoComplete:"nope",color:"success",className:"textfield"})}),(0,S.jsx)(d.ZP,{item:!0,xs:6,children:(0,S.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},required:!0,fullWidth:!0,id:"phone",label:"Mobile Number",name:"phone",value:z.phone,onChange:Y,color:"success",className:"textfield",autoComplete:"nope"})}),(0,S.jsx)(d.ZP,{item:!0,xs:6,children:(0,S.jsx)(t.Z,{type:"button",fullWidth:!0,disabled:J,onClick:Q,className:"signup-btn",variant:"contained",color:"success",size:"large",sx:{mt:2,mb:2},children:(0,S.jsx)("span",{className:"heading",children:"Fetch Otp"})})}),(0,S.jsx)(d.ZP,{item:!0,xs:6,children:(0,S.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},required:!0,fullWidth:!0,name:"password",label:"Enter OTP",type:"password",id:"password",value:z.password,onChange:Y,autoComplete:"nope",color:"success",className:"textfield"})}),(0,S.jsx)(d.ZP,{item:!0,xs:6,children:(0,S.jsx)(t.Z,{type:"button",fullWidth:!0,onClick:function(e){e.preventDefault();var a=z.password;console.log(a),window.confirmationResult.confirm(a).then((function(e){var a=e.user;console.log(JSON.stringify(a)),alert("User is Verified")})).catch((function(e){console.log("erroe in sumbitotp")}))},className:"signup-btn",variant:"contained",color:"success",size:"large",sx:{mt:2,mb:2},children:(0,S.jsx)("span",{className:"heading",children:"Submit OTP"})})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(p.Z,{className:"textfield",sx:{width:"100%",fontSize:14},children:[(0,S.jsx)(m.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},id:"demo-simple-select-helper-label",children:(0,S.jsx)("span",{className:"heading",children:"Type"})}),(0,S.jsxs)(h.Z,{sx:{fontSize:"1.2rem"},labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:z.type,label:"Type",name:"type",onChange:Y,color:"success",children:[(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"",children:(0,S.jsx)("em",{className:"heading",children:"Select"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"farmer",children:(0,S.jsx)("span",{className:"heading",children:"Producer"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"customer",children:(0,S.jsx)("span",{className:"heading",children:"Consumer"})})]})]})}),"farmer"===z.type&&(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(p.Z,{className:"textfield",color:"success",sx:{width:"100%"},children:[(0,S.jsx)(m.Z,{id:"demo-simple-select-helper-label",children:(0,S.jsx)("span",{className:"heading",children:"Producer Type"})}),(0,S.jsxs)(h.Z,{sx:{fontSize:"1.3rem"},labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:z.farmertype,label:"farmertype",name:"farmertype",onChange:Y,children:[(0,S.jsx)(b.Z,{value:"",children:(0,S.jsx)("em",{className:"heading",children:"None"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"farmers",children:(0,S.jsx)("span",{className:"heading",children:"Farmer"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"Organic farmers",children:(0,S.jsx)("span",{className:"heading",children:"Organic Farmer"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"FPO/FPC",children:(0,S.jsx)("span",{className:"heading",children:"FPO/FPC"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"Retailer",children:(0,S.jsx)("span",{className:"heading",children:"Retailer"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"Wholesaler",children:(0,S.jsx)("span",{className:"heading",children:"Wholesaler"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"Start-up",children:(0,S.jsx)("span",{className:"heading",children:"Start Up"})}),(0,S.jsx)(b.Z,{sx:{fontSize:"1.3rem",fontFamily:"Arturo"},value:"Vocal for local producers",children:(0,S.jsx)("span",{className:"heading",children:"Vocal for Local Producers"})})]})]})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"Arturo"}},fullWidth:!0,name:"address",label:"address (optional)",type:"address",id:"address",value:z.address,onChange:Y,autoComplete:"new-address",color:"success",className:"textfield"})}),"farmer"===z.type&&(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsx)(j.V,{tags:W,suggestions:l,handleDelete:function(e){var a=W.slice(0);a.splice(e,1),M(a)},handleAddition:function(e){M([].concat((0,r.Z)(W),[e]))},placeholder:"Add new tag",allowNew:!0,autofocus:!1,minQueryLength:1,classNames:{suggestions:"tag-suggestions"}})})]}),"no error"!==V&&(0,S.jsx)("h3",{style:{alignSelf:"center",color:"red",marginTop:"10px"},children:V}),(0,S.jsx)(t.Z,{item:!0,xs:12,type:"submit",fullWidth:!0,className:"signup-btn",variant:"contained",color:"success",size:"large",sx:{mt:3,mb:2},children:(0,S.jsx)("span",{className:"heading",children:"register"})}),(0,S.jsx)(d.ZP,{container:!0,justifyContent:"center",children:(0,S.jsx)(d.ZP,{item:!0,children:(0,S.jsxs)(f.rU,{className:"form-link",to:"/login",variant:"body2",children:["Already have an account? ",(0,S.jsx)("span",{className:"login",children:"Log In"})]})})})]})]})]})}},9462:function(e,a,l){var s=l(3897);l(7493);s.Z.initializeApp({apiKey:"AIzaSyAUxdUdNhrl8BSz_4MxKa0d6FwiCfgMtUE",authDomain:"otp-demo-cc2a7.firebaseapp.com",projectId:"otp-demo-cc2a7",storageBucket:"otp-demo-cc2a7.appspot.com",messagingSenderId:"646152500375",appId:"1:646152500375:web:389ef29c749b662bd8e5d2"}),a.Z=s.Z}}]);
//# sourceMappingURL=910.9ccdc50e.chunk.js.map