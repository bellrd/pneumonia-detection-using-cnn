(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),i=t.n(r),c=t(14),o=t(36),m=t(136),s=t(139),u=t(141),p=Object(m.a)((function(e){return{root:{marginTop:e.spacing(2),textAlign:"center"},title:{fontFamily:"Fredoka one",fontSize:"1.8rem",lineHeight:"1.2",textTransform:"Capitalize",borderBottom:"4px solid grey","& span:first-child":{color:e.palette.secondary.main},"& span:nth-child(2)":{color:e.palette.primary.main}},navlinkdiv:{marginTop:e.spacing(3)},navlinks:{textTransform:"Capitalize",color:e.palette.primary.main,textDecoration:"underline",fontFamily:"Nunito",fontSize:"1rem"}}})),d=function(e){var a=p();return(l.a.createElement("div",null,l.a.createElement(s.a,{className:a.root},l.a.createElement("span",{className:a.title},l.a.createElement("span",null,"Pneumonia"),l.a.createElement("span",null," Detection ")),l.a.createElement("div",{className:a.navlinkdiv},l.a.createElement(u.a,{className:a.navlinks}," Resources"),l.a.createElement(u.a,{className:a.navlinks}," Documentation "),l.a.createElement(u.a,{className:a.navlinks}," GitHub")," ",l.a.createElement("br",null),l.a.createElement(u.a,{className:a.navlinks}," Metrics "),l.a.createElement(u.a,{className:a.navlinks},"Apis"),l.a.createElement(u.a,{className:a.navlinks},"Feedback")))))},g=function(e,a){switch(a.type){case"LOADER":return Object(c.a)(Object(c.a)({},e),{},{showLoader:a.payload});case"UPLOADED":return console.log(a.payload),Object(c.a)(Object(c.a)({},e),{},{imageAvailable:!0,imageUrl:a.payload.url,id:a.payload.id});case"RESULT":return Object(c.a)(Object(c.a)({},e),{},{resultAvailable:!0,result:a.payload});default:return}},h={imageAvailable:!1,showLoader:!1,resultAvailable:!1,showMetadata:!0,isMobile:function(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a}(),result:{normal:{prob:"0.9",percent:"89%"},penumonic:{prob:"0.7",percent:"75%"},answer:"Pneumonic"}},E=l.a.createContext({}),b=function(e){var a=l.a.useReducer(g,h),t=Object(o.a)(a,2),n=t[0],r=t[1];return(l.a.createElement(E.Provider,{value:{state:n,dispatch:r}},e.children))},f=t(142),v=t(143),y=Object(m.a)((function(e){return{root:{marginTop:e.spacing(2),flexGrow:1},title:{marginLeft:e.spacing(8),flexGrow:1,fontWeight:"bolder",fontFamily:"Nunito",fontSize:"1.6vw",color:e.palette.secondary.main,textDecoration:"underline","& span":{color:e.palette.primary.main}},navlink:{marginRight:e.spacing(8),textDecoration:"underline",fontWeight:"bold",fontFamily:"Nunito",textTransform:"Capitalize",fontSize:"1.6vw",color:e.palette.primary.main}}}));function w(e){l.a.useContext(E);var a=y();return l.a.createElement("div",{className:a.root},l.a.createElement(f.a,{color:"inherit",position:"static",elevation:0},l.a.createElement(v.a,null,l.a.createElement("span",{className:a.title},"Pneumonia  ",l.a.createElement("br",null),"  ",l.a.createElement("span",null," Detection using Ai ")),l.a.createElement(u.a,{component:"a",href:"https://pneumonia-detection-using-cnn.herokuapps.com/static/docs.pdf",className:a.navlink},"Documentation"),l.a.createElement(u.a,{component:"a",href:"#resources",className:a.navlink},"Feedback"),l.a.createElement(u.a,{component:"a",href:"",className:a.navlink},"Metrics"),l.a.createElement(u.a,{component:"a",href:"https://github.com/bellrd/pneumonia-detection-using-cnn.git/",className:a.navlink},"Github"))))}var x=t(158),k=t(146),N=t(105),j=t(156),O=t(153),A=t(154),D=t(157),z=t(144),F=t(43),S=t.n(F),C="https://pneumonia-detection-using-cnn.herokuapp.com",T=Object(m.a)((function(e){return{root:{height:"100%",display:"flex"},preview:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",fontFamily:"Nunito",textDecoration:"underline ",width:"50%",padding:e.spacing(2),"& img":{filter:"brightness(50%)"}},metadata:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-evenly",height:"100%",width:"50%",padding:e.spacing(2),"& button":{width:"50%",height:"40px",fontFamily:"Alegreya",fontWeight:"bold","@media screen and (max-width:600px)":{width:"90%"}}},metadataText:{fontFamily:"Nunito",textDecoration:"underline"},input:{style:"none",width:"100%",height:"100%"}}})),L=function(e){var a=l.a.useState(null),t=Object(o.a)(a,2),r=t[0],i=t[1],c=T(),m=Object(n.useContext)(E);return l.a.createElement("div",{className:c.root},l.a.createElement("div",{className:c.preview},m.state.imageAvailable?l.a.createElement("img",{src:m.state.imageUrl,width:"100%",height:"80%"}):m.state.showLoader?l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{size:20,color:"secondary"})):l.a.createElement("p",null," No image yet ")),l.a.createElement("div",{className:c.metadata},l.a.createElement("button",{variant:"contained",elevation:0,onClick:function(){document.getElementById("file").click()}},"Select File",l.a.createElement("input",{type:"file",id:"file",style:{display:"none"},onChange:function(e,a){var t=e.target.files[0];i(t),m.dispatch({type:"LOADER",payload:!0});var n=new FormData;n.append("file",t),S.a.post("".concat(C,"/api/upload"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("UPloaded"),m.dispatch({type:"LOADER",payload:!1});var a=window.URL.createObjectURL(t);console.log({turl:a}),m.dispatch({type:"UPLOADED",payload:{url:a,id:e.data.id}}),S.a.post("".concat(C,"/api/predict"),{id:e.data.id}).then((function(e){console.log(e.data),m.dispatch({type:"RESULT",payload:e.data})})).catch((function(e){alert("Network error")}))})).catch((function(e){alert("Network error")}))}})),l.a.createElement("div",{className:c.metadataText},m.state.imageAvailable?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null," File Size: ",r.size," ")," ",l.a.createElement("br",null),l.a.createElement("span",null," Name: ",r.name," ")," ",l.a.createElement("br",null),l.a.createElement("span",null," Type: ",r.type," ")):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null," Upload only x-ray image of Lung. ")," ",l.a.createElement("br",null),l.a.createElement("span",null," Max file size is 16 Megabytes.")," ",l.a.createElement("br",null)))))},P=t(145),R=t(106),U=t(147),W=t(148),q=t(149),I=t(150),B=t(151),M=t(152),H=Object(m.a)((function(e){return{main:{padding:e.spacing(4)},other:{marginTop:e.spacing(8)},type:{textAlign:"center",textDecoration:"dotted underline"},info:{textAlign:"center",textDecoration:"underline"},resultSlogan:{fontFamily:"Nunito",textDecoration:"underline"}}})),K=function(e){var a=H(),t=l.a.useContext(E);return t.state.resultAvailable?l.a.createElement(k.a,{container:!0,direction:"column",justify:"flex-end",alignItems:"stretch",className:a.main},l.a.createElement(k.a,{item:!0,className:a.type,xs:12},l.a.createElement("h2",null," ",t.state.result.answer," ")),l.a.createElement(k.a,{item:!0,xs:12,className:a.other},l.a.createElement(U.a,{component:N.a},l.a.createElement(W.a,{className:a.table,"aria-label":"simple table"},l.a.createElement(q.a,null,l.a.createElement(I.a,null,l.a.createElement(B.a,null,l.a.createElement("b",null," Label ")),l.a.createElement(B.a,{align:"right"}," ",l.a.createElement("b",null," Probability ")),l.a.createElement(B.a,{align:"right"}," ",l.a.createElement("b",null," Percentage ")))),l.a.createElement(M.a,null,l.a.createElement(I.a,null,l.a.createElement(B.a,{component:"th",scope:"row"},l.a.createElement("b",null," Normal")),l.a.createElement(B.a,{align:"right"},t.state.result.normal.prob),l.a.createElement(B.a,{align:"right"},t.state.result.normal.percent," ")),l.a.createElement(I.a,null,l.a.createElement(B.a,{component:"th",scope:"row"},l.a.createElement("b",null," Pneumonic ")),l.a.createElement(B.a,{align:"right"},t.state.result.pneumonic.prob),l.a.createElement(B.a,{align:"right"},t.state.result.pneumonic.percent)))))),l.a.createElement(k.a,{item:!0,className:a.info},l.a.createElement("h4",null," Please provide feedback about the result."))):l.a.createElement("div",null,l.a.createElement(s.a,{maxWidth:"sm"},l.a.createElement(P.a,null,l.a.createElement(k.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},l.a.createElement(k.a,{item:!0,xs:12},l.a.createElement(R.a,{variant:"h5",className:a.resultSlogan}," Result will appear here !"))))))},G=Object(m.a)((function(e){return{root:{marginTop:e.spacing(8),"@media screen and (max-width:600px)":{marginTop:e.spacing(5)},"& li":{fontFamily:"Alegreya",fontSize:"16px"}},upload:{height:"400px","@media screen and (max-width:600px)":{height:"200px",border:"2px dashed grey"}},result:{height:"400px"},feedback:{marginTop:e.spacing(4)},form:{padding:e.spacing(4)},feature:{padding:e.spacing(4),fontFamily:"Alegreya","& h1":{}},fclass:{marginLeft:e.spacing(1),marginTop:e.spacing(4),fontSize:"2vw",fontFamily:"Nunito",color:"#663399",textDecoration:"underline","& span":{color:"#fb8400"}}}})),Q=function(e){var a=G(),t=l.a.useContext(E),n=l.a.useState({email:"",review:"",result:"not sure"}),r=Object(o.a)(n,2),i=r[0],m=r[1],p=function(e){"email"===e.target.name?m(Object(c.a)(Object(c.a)({},i),{},{email:e.target.value})):"review"===e.target.name?m(Object(c.a)(Object(c.a)({},i),{},{review:e.target.value})):"result"===e.target.name?m(Object(c.a)(Object(c.a)({},i),{},{result:e.target.value})):console.log("wtf level 101")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{only:["lg","md"]},l.a.createElement(d,null)),l.a.createElement(x.a,{only:["xs","sm"]},l.a.createElement(w,null)),l.a.createElement(s.a,{className:a.root},l.a.createElement(k.a,{container:!0,justify:"space-between",spacing:4},l.a.createElement(k.a,{item:!0,xs:12,sm:6},l.a.createElement(N.a,{className:a.upload,elevation:3},l.a.createElement(L,null))),l.a.createElement(k.a,{item:!0,xs:12,sm:5},l.a.createElement(N.a,{className:a.result,elevation:3},l.a.createElement(K,null)))),l.a.createElement("div",{className:a.fclass}," ",l.a.createElement("span",null," Feedback & Resources ")," "),l.a.createElement(k.a,{container:!0,justify:"space-between",className:a.feedback,spacing:8},l.a.createElement(k.a,{item:!0,xs:6},l.a.createElement(N.a,{className:a.feature,elevation:3},l.a.createElement("h2",null," About "),l.a.createElement("span",null," This is my (",l.a.createElement("b",null," Pawan Kumar "),") final sem project.",l.a.createElement("b",null,"Babu Banarasi Das university "),", Lucknow"),l.a.createElement("h2",null," Disclaimer "),l.a.createElement("span",null," Altough model is quite accurate but its result ",l.a.createElement("b",null," can not be trusted for medical use as for now "),"."),l.a.createElement("h2",null,"Contact"),l.a.createElement("span",null," email: pawankumar2399@gmail.com")," ",l.a.createElement("br",null),l.a.createElement("span",null," Mobile: +917706833591 "),l.a.createElement("div",null," \xa0"),l.a.createElement("span",null," This project is hosted on heroku"))),l.a.createElement(k.a,{item:!0,md:6},l.a.createElement(N.a,{className:a.form,elevation:3},l.a.createElement(j.a,{name:"email",type:"email",variant:"outlined",label:"Email",fullWidth:!0,required:!0,onChange:p}),"\xa0 \xa0 \xa0",l.a.createElement(O.a,{component:"legend"}," Result was ?"),l.a.createElement(A.a,{name:"result",value:"correct",control:l.a.createElement(D.a,{color:"secondary",checked:"correct"===i.result,onChange:p}),label:"Correct",labelPlacement:"start"}),l.a.createElement(A.a,{value:"incorrect",name:"result",control:l.a.createElement(D.a,{color:"secondary",checked:"incorrect"===i.result,onChange:p}),label:"Incorrect",labelPlacement:"start"}),l.a.createElement(A.a,{name:"result",value:"not sure",control:l.a.createElement(D.a,{color:"primary",checked:"not sure"===i.result,onChange:p}),label:"not sure",labelPlacement:"start"}),l.a.createElement(O.a,{component:"legend"}," \xa0 "),l.a.createElement(j.a,{fullWidth:!0,name:"review",multiline:!0,variant:"outlined",rows:5,label:"Any other thing"}),"\xa0 \xa0 \xa0",l.a.createElement(u.a,{variant:"contained",fullWidth:!0,color:"secondary",onClick:function(e){S.a.post(C+"/api/feedback",Object(c.a)(Object(c.a)({},i),{},{id:t.state.id})).then((function(e){alert("Thanx for your feedback !")})).catch((function(e){alert("Something went wrong")}))}},"Save my feedback")))),l.a.createElement("section",{id:"resources"},l.a.createElement("div",{className:a.fclass}," ",l.a.createElement("span",null," References: ")," "),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement("b",null," Source code: ")," ",l.a.createElement("a",{href:"https://github.com/bellrd/pneumonia-detection-using-cnn.git"}," https://github.com/bellrd/pneumonia-detection-using-cnn.git")," "),l.a.createElement("li",null," ",l.a.createElement("b",null," Jupyter Notebook: ")," ",l.a.createElement("a",{href:"https://colab.research.google.com/drive/1aopNkpZ27qx5By2WKr2eVxci_QQk0KHw?usp=sharing"}," https://colab.research.google.com/drive/1aopNkpZ27qx5By2WKr2eVxci_QQk0KHw?usp=sharing")," "),l.a.createElement("li",null," ",l.a.createElement("b",null," Dataset Used: ")," ",l.a.createElement("a",{href:"https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia/data"},"https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia/data")," "),l.a.createElement("li",null," ",l.a.createElement("b",null," Project Report: ")," ",l.a.createElement("a",{href:"https://github.com/bellrd/pneumonia-detection-using-cnn.git"}," https://github.com/bellrd/pneumonia-detection-using-cnn/report.pdf")," "),l.a.createElement("li",null," ",l.a.createElement("b",null," Slides: ")," ",l.a.createElement("a",{href:"https://github.com/bellrd/pneumonia-detection-using-cnn.git"}," https://github.com/bellrd/pneumonia-detection-using-cnn.git/slide.pdf")," ")))))},_=t(50),J=t(11),V=t(155),Z=t(68),$=Object(Z.a)({palette:{primary:{main:"#663399"},secondary:{main:"#fb8400"}},typography:{fontFamily:['"Alegreya"','"Alfa Slab One"','"sans-serif"','"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});var X=function(){return l.a.createElement(b,null,l.a.createElement(P.a,null),l.a.createElement(V.a,{theme:$},l.a.createElement(_.a,null,l.a.createElement("div",null,l.a.createElement(J.c,null,l.a.createElement(J.a,{path:"/",exact:!0,component:Q}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,a,t){e.exports=t(104)}},[[77,1,2]]]);
//# sourceMappingURL=main.ad9eda73.chunk.js.map