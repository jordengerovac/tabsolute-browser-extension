(this["webpackJsonptabsolutely-react-extension"]=this["webpackJsonptabsolutely-react-extension"]||[]).push([[0],{10:function(t,e,i){},41:function(t,e,i){},48:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),s=i(16),o=i.n(s),r=(i(41),i(3)),l=i(4),c=i(6),p=i(5),d=(i(10),i(7)),u="FETCH_PHOTO",h="CHANGE_VIEW",b="CHANGE_BACKGROUND_COLOUR",j="CHANGE_FONT_COLOUR",g="ADD_WIDGET",x="DELETE_WIDGET",f="UPDATE_WIDGET",O="UPDATE_WEATHER_WIDGET",y="UPDATE_WIDGET_FONT",v="ADD_LINK_TILE",m="DELETE_LINK_TILE",w="UPDATE_LINK_TILE",k="TOGGLE_PHOTO",D=function(t){return function(e){e({type:x,payload:t})}},C=function(t){return function(e){e({type:f,payload:t})}},S=i(0),T=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).handleSubmit=function(e){e.preventDefault(),t.props.addWidget(e)},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{style:{padding:"10px",display:"flex",textAlign:"left",margin:"10px 10px 10px 10px",backgroundColor:"#2D3339",borderRadius:"7px"},children:[Object(S.jsx)("p",{style:{color:"white",fontWeight:"bolder",marginTop:"3px"},children:"Add Widget:"}),Object(S.jsx)("form",{onSubmit:this.handleSubmit,style:{marginLeft:"15px"},children:Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsxs)("select",{ref:"addWidget",name:"widgets",id:"widgets",style:{border:"none",height:"20px",width:"120px",margin:"3px 0px 0px 0px"},children:[Object(S.jsx)("option",{selected:!0,disabled:!0,children:"Select Widget"}),Object(S.jsx)("option",{value:"Greeting",children:"Greeting"}),Object(S.jsx)("option",{value:"Time",children:"Time"}),Object(S.jsx)("option",{value:"Quote",children:"Quote"}),Object(S.jsx)("option",{value:"Weather",children:"Weather"})]}),Object(S.jsx)("button",{type:"submit",style:{backgroundColor:"#0bb508",border:"none",borderRadius:"10%",fontSize:"15px",margin:"2px 0px 0px 18px",color:"white",height:"25px",width:"25px",paddingBottom:"2px",cursor:"pointer"},children:"+"})]})})]})}}]),i}(a.a.Component);var V=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{addWidget:function(t){return function(e){e({type:g,payload:t.target[0].value})}}})(T),W=i.p+"static/media/tabsolutelogo2.cd6dbf45.png",A=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:W,alt:"tabsolute_logo",width:"85px",height:"60px",style:{marginTop:"20px"}}),Object(S.jsx)("h4",{style:{color:"#4495F6"},children:"TABSOLUTE"})]})}}]),i}(a.a.Component),_=i(17),L=i(32),E=i(8),N={photo:{},photoVisible:!0,loading:!0},P={view:"dashboard",fontColour:"white",backgroundColour:"#2D3339",loading:!0},I=i(25),R=i(67),z={widgets:[{id:Object(R.a)(),type:"Greeting",value:"",display:{customizationVisible:"false",font:"50",location:"center"}},{id:Object(R.a)(),type:"Time",value:"12",display:{customizationVisible:"false",font:"50",location:"center"}}]},G={tiles:[{id:Object(R.a)(),name:"Twitter",value:"https://www.twitter.com",icon:"fab fa-twitter"},{id:Object(R.a)(),name:"Facebook",value:"https://www.facebook.com",icon:"fab fa-facebook"},{id:Object(R.a)(),name:"YouTube",value:"https://www.youtube.com",icon:"fab fa-youtube"}]},F=Object(_.c)({photoDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(E.a)(Object(E.a)({},t),{},{photo:e.payload,loading:!1});case k:return Object(E.a)(Object(E.a)({},t),{},{photoVisible:!t.photoVisible});default:return t}},viewDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(E.a)(Object(E.a)({},t),{},{view:e.payload,loading:!1});case b:return Object(E.a)(Object(E.a)({},t),{},{backgroundColour:e.payload});case j:return Object(E.a)(Object(E.a)({},t),{},{fontColour:e.payload});default:return t}},widgetDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:var i={};return i="Greeting"===e.payload?{id:Object(R.a)(),type:"Greeting",value:"",display:{customizationVisible:"false",font:"50",location:"center"}}:"Time"===e.payload?{id:Object(R.a)(),type:"Time",value:"12",display:{customizationVisible:"false",font:"50",location:"center"}}:"Weather"===e.payload?{id:Object(R.a)(),type:"Weather",value:"",display:{customizationVisible:"false",font:"20",location:"center"}}:{id:Object(R.a)(),type:"Quote",value:"",display:{customizationVisible:"false",font:"30",location:"center"}},Object(E.a)(Object(E.a)({},t),{},{widgets:[].concat(Object(I.a)(t.widgets),[i])});case x:var n=t.widgets.filter((function(t){return e.payload.target.id!==t.id}));return Object(E.a)(Object(E.a)({},t),{},{widgets:n});case f:var a=t.widgets.map((function(t){return t.id===e.payload.target.id&&(t.value=e.payload.target.value),t}));return Object(E.a)(Object(E.a)({},t),{},{widgets:a});case O:var s=t.widgets.map((function(t){return t.id===e.id&&(t.value=e.payload),t}));return Object(E.a)(Object(E.a)({},t),{},{widgets:s});case y:var o=t.widgets.map((function(t){return t.id===e.id&&(t.display.font=e.payload),t}));return Object(E.a)(Object(E.a)({},t),{},{widgets:o});default:return t}},linkTileDetails:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:var i={};return i={id:Object(R.a)(),name:"New Link Tile",value:"https://www.google.com",icon:"fas fa-link"},Object(E.a)(Object(E.a)({},t),{},{tiles:[].concat(Object(I.a)(t.tiles),[i])});case m:var n=t.tiles.filter((function(t){return e.payload.target.id!==t.id}));return Object(E.a)(Object(E.a)({},t),{},{tiles:n});case w:var a=e.payload.target.name,s=t.tiles.map((function(t){return t.id===e.payload.target.id&&("name"===a?t.name=e.payload.target.value:"icon"===a?t.icon=e.payload.target.value:t.value=e.payload.target.value),t}));return Object(E.a)(Object(E.a)({},t),{},{tiles:s});default:return t}}});var B=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),H=[L.a],U=Object(_.d)(F,B,_.a.apply(void 0,H));U.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(i){}}(U.getState())}));var M=U,K=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=M.getState().viewDetails.view;return Object(S.jsx)("div",{style:{margin:"10px 0px 20px 0px"},children:Object(S.jsxs)("fieldset",{name:"view",style:{border:"none",display:"flex",color:"white",margin:"auto",justifyContent:"center"},children:[Object(S.jsx)("label",{style:{margin:"0"},children:"Dashboard"}),Object(S.jsx)("input",{type:"radio",value:"dashboard",name:"view",style:{marginRight:"25px"},onChange:this.props.changeView,defaultChecked:"dashboard"===t}),Object(S.jsx)("label",{children:"Link Tiles"}),Object(S.jsx)("input",{value:"tile",type:"radio",name:"view",onChange:this.props.changeView,defaultChecked:"tile"===t})]})})}}]),i}(a.a.Component);var q=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails}}),{changeView:function(t){return function(e){e({type:h,payload:t.target.value})}}})(K),Q=i(14),J=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).updateDisplay=function(t){if("Enter"===t.key){var e={};"background"===t.target.name?e={type:b,payload:t.target.value}:"font"===t.target.name&&(e={type:j,payload:t.target.value}),M.dispatch(e)}},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{style:Object(Q.a)({textAlign:"left",color:"white",margin:"15px"},"margin","30px 0px 10px 15px"),children:"DISPLAY"}),Object(S.jsx)("div",{style:{backgroundColor:"#30363D",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(S.jsx)(q,{}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(S.jsx)("p",{style:{color:"white",fontSize:"15px",margin:"0px 0px 5px 20px"},children:"Background Colour"}),Object(S.jsx)("input",{type:"text",defaultValue:this.props.viewDetails.backgroundColour,name:"background",placeholder:"Colour / Hex colour code (ex. #2D3339)",style:{width:"200px"},onKeyPress:this.updateDisplay})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{style:{color:"white",fontSize:"15px",margin:"0px 0px 5px 20px"},children:"Font Colour"}),Object(S.jsx)("input",{type:"text",defaultValue:this.props.viewDetails.fontColour,name:"font",placeholder:"Colour / Hex colour code (ex. #2D3339)",style:{width:"200px"},onKeyPress:this.updateDisplay})]})]})]})})]})}}]),i}(a.a.Component);var Y=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails}}))(J),X=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).updateWidgetFont=function(e){if("Enter"===e.key){var i={type:y,payload:e.target.value,id:t.props.widget.id};M.dispatch(i)}},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsx)("div",{style:{textAlign:"left"},children:Object(S.jsx)("div",{style:{backgroundColor:"#2D3339",padding:"10px",borderRadius:"7px"},children:Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 0px 0px",display:"flex"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white"},children:"Font Size"}),Object(S.jsx)("input",{type:"text",style:{width:"70px"},onKeyPress:this.updateWidgetFont,id:this.props.widget.id,defaultValue:this.props.widget.display.font})]})})})}}]),i}(a.a.Component),Z=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){var t=String(this.props.widget.id);return Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(S.jsxs)("div",{style:{float:"right"},children:[Object(S.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(S.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(S.jsxs)("fieldset",{id:t,style:{border:"none",display:"flex",color:"white",justifyContent:"center"},children:[Object(S.jsx)("label",{children:"12-hour"}),Object(S.jsx)("input",{style:{marginTop:"10px"},type:"radio",value:"12",onChange:this.props.updateWidget,id:this.props.widget.id,name:t,defaultChecked:"12"===this.props.widget.value}),Object(S.jsx)("label",{children:"24-hour"}),Object(S.jsx)("input",{style:{marginTop:"10px"},type:"radio",value:"24",onChange:this.props.updateWidget,id:this.props.widget.id,name:t,defaultChecked:"12"!==this.props.widget.value})]}),this.state.displaySettingsVisible?Object(S.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var $=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:D,updateWidget:C})(Z),tt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(S.jsxs)("div",{style:{float:"right"},children:[Object(S.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(S.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(S.jsx)("input",{style:{marginTop:"10px"},type:"text",defaultValue:this.props.widget.value,onChange:this.props.updateWidget,id:this.props.widget.id,placeholder:"Name"}),this.state.displaySettingsVisible?Object(S.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var et=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:D,updateWidget:C})(tt),it=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px",minHeight:"20px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 20px 0px"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(S.jsxs)("div",{style:{float:"right"},children:[Object(S.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(S.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),this.state.displaySettingsVisible?Object(S.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var nt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:D})(it),at=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.getWeather=function(e){if("Enter"===e.key){var i="".concat("36cdad6235eced65ac3b7cf24ead1902");fetch("https://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&units=metric&appid="+i).then((function(t){return t.json()})).then((function(i){var n=e.target.value,a=i.main.temp_min,s=i.main.temp_max,o=i.weather[0].description,r={type:O,payload:n+":@:"+a+":@:"+s+":@:"+o,id:t.props.widget.id};M.dispatch(r)}))}},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:this.props.widget.type}),Object(S.jsxs)("div",{style:{float:"right"},children:[Object(S.jsx)("i",{onClick:this.toggleDisplaySettings,id:this.props.widget.id,style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"}),Object(S.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 5px"},class:"fas fa-trash-alt",onClick:this.props.deleteWidget,id:this.props.widget.id})]})]}),Object(S.jsx)("input",{id:this.props.widget.id,type:"text",placeholder:"City",defaultValue:this.props.widget.value.split(":@:")[0],onKeyPress:this.getWeather,style:{marginTop:"10px"}}),this.state.displaySettingsVisible?Object(S.jsx)(X,{widget:this.props.widget}):null]})}}]),i}(a.a.Component);var st=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{deleteWidget:D})(at),ot=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{style:{textAlign:"left",color:"white",margin:"30px 0px 0px 15px"},children:"WIDGETS"}),Object(S.jsx)(V,{}),this.props.widgetDetails.widgets.map((function(t){return"Greeting"===t.type?Object(S.jsx)(et,{widget:t}):"Time"===t.type?Object(S.jsx)($,{widget:t}):"Quote"===t.type?Object(S.jsx)(nt,{widget:t}):"Weather"===t.type?Object(S.jsx)(st,{widget:t}):void 0}))]})}}]),i}(a.a.Component);var rt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}))(ot),lt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=[{key:"Twitter",value:"fab fa-twitter"},{key:"Facebook",value:"fab fa-facebook"},{key:"YouTube",value:"fab fa-youtube"},{key:"Google",value:"fab fa-google"},{key:"Link",value:"fas fa-link"},{key:"TV",value:"fas fa-tv"},{key:"Wifi",value:"fas fa-wifi"},{key:"Briefcase",value:"fas fa-briefcase"},{key:"Apple",value:"fab fa-apple"},{key:"Bacon",value:"fas fa-bacon"},{key:"Smile",value:"fas fa-smile"},{key:"Envelope",value:"fas fa-envelope"},{key:"Camera",value:"fas fa-camera"},{key:"Book",value:"fas fa-book"}];return Object(S.jsx)("div",{style:{textAlign:"left"},children:Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",borderRadius:"7px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 20px 0px",display:"flex"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",marginTop:"3px"},children:"Add Link Tile"}),Object(S.jsx)("button",{style:{backgroundColor:"#0bb508",border:"none",borderRadius:"10%",fontSize:"15px",margin:"0px 0px 0px 18px",color:"white",height:"25px",width:"25px",paddingBottom:"2px",cursor:"pointer"},onClick:this.props.addLinkTile,children:"+"})]}),this.props.tiles.map((function(i){return Object(S.jsxs)("div",{style:{marginBottom:"15px",display:"flex",color:"white",justifyContent:"space-between"},children:[Object(S.jsxs)("div",{style:{float:"left"},children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Name"}),Object(S.jsx)("input",{defaultValue:i.name,name:"name",onChange:t.props.updateLinkTile,id:i.id,style:{width:"140px"}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"URL"}),Object(S.jsx)("input",{defaultValue:i.value,name:"value",onChange:t.props.updateLinkTile,id:i.id,style:{width:"140px"}})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"Icon"}),Object(S.jsx)("select",{id:i.id,style:{border:"none",height:"20px",width:"147px"},onChange:t.props.updateLinkTile,name:"icon",children:e.map((function(t){return Object(S.jsx)("option",{value:t.value,selected:t.value===i.icon,children:t.key})}))})]})]}),Object(S.jsx)("div",{style:{marginRight:"30px"},children:Object(S.jsx)("i",{style:{color:"white",cursor:"pointer",margin:"0px 0px 0px 25px"},class:"fas fa-trash-alt",onClick:t.props.deleteLinkTile,id:i.id})})]})}))]})})}}]),i}(a.a.Component);var ct=Object(d.b)((function(t,e){return{linkTileDetails:t.linkTileDetails}}),{addLinkTile:function(t){return function(e){e({type:v,payload:t})}},deleteLinkTile:function(t){return function(e){e({type:m,payload:t})}},updateLinkTile:function(t){return function(e){e({type:w,payload:t})}}})(lt),pt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).toggleDisplaySettings=function(){t.setState({displaySettingsVisible:!t.state.displaySettingsVisible})},t.state={displaySettingsVisible:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{style:{backgroundColor:"#2D3339",padding:"10px",margin:"0px 10px 10px 10px",borderRadius:"7px"},children:[Object(S.jsxs)("div",{style:{textAlign:"left",margin:"0px 10px 10px 0px",minHeight:"10px"},children:[Object(S.jsx)("p",{style:{float:"left",color:"white",fontWeight:"bolder"},children:"Link Tile Options"}),Object(S.jsx)("div",{style:{float:"right"},children:Object(S.jsx)("i",{onClick:this.toggleDisplaySettings,id:"linkWidget",style:{color:"white",cursor:"pointer",margin:"0px 5px 0px 5px"},class:"fas fa-wrench"})})]}),this.state.displaySettingsVisible?Object(S.jsx)(ct,{tiles:this.props.linkTileDetails.tiles}):null]})}}]),i}(a.a.Component);var dt=Object(d.b)((function(t,e){return{linkTileDetails:t.linkTileDetails}}))(pt),ut=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{style:Object(Q.a)({textAlign:"left",color:"white",margin:"15px"},"margin","30px 0px 10px 15px"),children:"LINK TILES"}),Object(S.jsx)(dt,{})]})}}]),i}(a.a.Component),ht=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).toggleSettings=function(){n.setState({settingsVisible:!n.state.settingsVisible})},n.state={settingsVisible:!1},n}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsx)("div",{children:this.state.settingsVisible?Object(S.jsxs)("div",{style:{display:"flex",height:"101vh",margin:"0",padding:"0",position:"fixed",overflowX:"hidden",zIndex:"100"},children:[Object(S.jsxs)("div",{style:{height:"99vh",width:"320px",backgroundColor:"#1F2023",borderRadius:"0px 10px 10px 0px",textAlign:"center",padding:"5px",borderRight:"1px solid #30363D",overflow:"scroll"},children:[Object(S.jsx)(A,{}),Object(S.jsx)(Y,{}),Object(S.jsx)(rt,{}),Object(S.jsx)(ut,{}),Object(S.jsx)("p",{style:{marginBottom:"25px"},children:Object(S.jsx)("a",{href:"https://paypal.me/jordengerovac?locale.x=en_US",style:{textDecoration:"none",color:"#4495F6"},children:"Support the project"})})]}),Object(S.jsx)("div",{className:"clickAway",style:{width:"80vw",height:"100%",cursor:"pointer"},onClick:this.toggleSettings})]}):Object(S.jsx)("i",{style:{color:"white",fontSize:"22px",margin:"7px",cursor:"pointer"},className:"fas fa-cog",onClick:this.toggleSettings})})}}]),i}(a.a.Component);var bt=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}))(ht),jt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=new Date,e="";return e=t.getHours()>=21?"night":t.getHours()>=18?"evening":t.getHours()>=12?"afternoon":"morning",""!==this.props.widget.value?Object(S.jsxs)("h3",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:["Good ",e,", ",this.props.widget.value]}):Object(S.jsxs)("h3",{style:{margin:"0",color:"",fontSize:this.props.widget.display.font+"px"},children:["Good ",e]})}}]),i}(a.a.Component),gt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).tick=function(){t.setState({currentTime:new Date})},t.state={currentTime:new Date},t}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.tick()}),1e3)}},{key:"render",value:function(){var t=this.state.currentTime.getHours()>=12?"PM":"AM";return"12"===this.props.widget.value?Object(S.jsxs)("h1",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:[this.state.currentTime.toLocaleTimeString().split(":")[0],":",this.state.currentTime.toLocaleTimeString().split(":")[1]," ",t]}):Object(S.jsxs)("h1",{style:{margin:"0",fontSize:this.props.widget.display.font+"px"},children:[this.state.currentTime.toTimeString().split(":")[0],":",this.state.currentTime.toTimeString().split(":")[1]]})}}]),i}(a.a.Component),xt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).getRandomQuote=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(e){var i=Math.floor(Math.random()*e.length);t.setState({quoteText:e[i].text,quoteAuthor:e[i].author})}))},t.state={quoteText:"",quoteAuthor:""},t}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.getRandomQuote()}},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{style:{fontSize:"20px"},children:this.state.quoteText}),Object(S.jsxs)("p",{style:{fontSize:"20px"},children:["- ",this.state.quoteAuthor]})]})}}]),i}(a.a.Component);var ft=Object(d.b)((function(t,e){return{widgetDetails:t.widgetDetails}}),{updateWidget:C})(xt),Ot=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=String(this.props.widget.value.split(":@:")[3]),e="";return e=t.includes("rain")?"fas fa-cloud-rain":t.includes("snow")?"fas fa-snowflake":t.includes("clouds")?"fas fa-cloud":t.includes("clear")?"fas fa-sun":"fas fa-smog",Object(S.jsxs)("div",{style:{textAlign:"right",margin:"7px",fontSize:this.props.widget.display.font+"px"},children:[Object(S.jsx)("p",{children:this.props.widget.value.split(":@:")[0]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("i",{className:e,style:{color:"white",fontSize:"40px"}}),Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(S.jsx)("p",{style:{margin:"6px"},children:parseInt(this.props.widget.value.split(":@:")[1])}),Object(S.jsx)("p",{style:{margin:"6px"},children:parseInt(this.props.widget.value.split(":@:")[2])})]})]})]})}}]),i}(a.a.Component),yt=i(66),vt=i(33),mt=i(65),wt=function(){return function(t){var e="".concat("B5vLJ0aNYeNZOYtpiNcNNfN0CdpoQgpgtmWnvj3YgJc");fetch("https://api.unsplash.com/collections/19428159/photos/?orientation=landscape&per_page=100&client_id="+e).then((function(t){return t.json()})).then((function(e){var i=e[Math.floor(Math.random()*e.length)];t({type:u,payload:i})}))}},kt=function(t){return function(e){e({type:k,payload:t})}},Dt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.props.fetchPhoto()}},{key:"render",value:function(){var t=Object(vt.a)({palette:{primary:{main:"#4495F6"}}}),e="";return this.props.photoDetails.loading||(e=this.props.photoDetails.photo.urls.regular,this.props.photoDetails.photoVisible||(e="")),Object(S.jsxs)("div",{className:"dashboard",style:{backgroundImage:"url("+e+")",width:"100vw",height:"100vh",backgroundSize:"cover",margin:"0",padding:"0",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundColor:this.props.viewDetails.backgroundColour},children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{style:{float:"left"},children:Object(S.jsx)(bt,{})}),Object(S.jsx)("div",{style:{float:"right",color:this.props.viewDetails.fontColour},children:this.props.widgetDetails.widgets.map((function(t){if("Weather"===t.type)return Object(S.jsx)(Ot,{widget:t})}))})]}),Object(S.jsx)("div",{className:"centered",style:{textAlign:"center",color:this.props.viewDetails.fontColour},children:this.props.widgetDetails.widgets.map((function(t){return"Greeting"===t.type?Object(S.jsx)(jt,{widget:t}):"Time"===t.type?Object(S.jsx)(gt,{widget:t}):"Quote"===t.type?Object(S.jsx)(ft,{widget:t}):void 0}))}),Object(S.jsx)("div",{style:{position:"absolute",bottom:"0px"},children:Object(S.jsx)(mt.a,{theme:t,children:Object(S.jsx)(yt.a,{checked:this.props.photoDetails.photoVisible,onClick:this.props.togglePhoto,color:"primary",name:"photoBackground",inputProps:{"aria-label":"primary checkbox"}})})}),this.props.photoDetails.photoVisible&&!this.props.photoDetails.loading?Object(S.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px",color:this.props.viewDetails.fontColour},children:Object(S.jsxs)("p",{children:[Object(S.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.photo.links.html+"https://unsplash.com/?utm_source=tabsolute&utm_medium=referral",children:"Photo"})," by ",Object(S.jsxs)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.photo.user.links.html+"/?utm_source=tabsolute&utm_medium=referral",children:[this.props.photoDetails.photo.user.first_name," ",this.props.photoDetails.photo.user.last_name]})," on ",Object(S.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:"https://unsplash.com/?utm_source=tabsolute&utm_medium=referral",children:"Unsplash"})]})}):null]})}}]),i}(a.a.Component);var Ct=Object(d.b)((function(t,e){return{photoDetails:t.photoDetails,widgetDetails:t.widgetDetails,viewDetails:t.viewDetails}}),{fetchPhoto:wt,togglePhoto:kt})(Dt),St=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsx)("a",{style:{textDecoration:"none",color:" white",margin:"15px"},href:this.props.tile.value,children:Object(S.jsxs)("div",{style:{backgroundColor:"#1F2023",height:"120px",width:"200px",borderRadius:"10px",padding:"10px"},children:[Object(S.jsx)("h4",{style:{fontWeight:"lighter"},children:this.props.tile.name}),Object(S.jsx)("i",{style:{color:"white",fontSize:"70px",marginTop:"20px"},className:this.props.tile.icon})]})})}}]),i}(a.a.Component),Tt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.props.fetchPhoto()}},{key:"render",value:function(){var t,e=Object(vt.a)({palette:{primary:{main:"#4495F6"}}}),i="";return this.props.photoDetails.loading||(i=this.props.photoDetails.photo.urls.regular,this.props.photoDetails.photoVisible||(i="")),Object(S.jsxs)("div",{className:"dashboard",style:{backgroundImage:"url("+i+")",width:"100vw",height:"100vh",backgroundSize:"cover",margin:"0",padding:"0",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundColor:this.props.viewDetails.backgroundColour},children:[Object(S.jsx)(bt,{}),Object(S.jsx)("div",{className:"centered",style:{textAlign:"center",display:"flex",flexWrap:"wrap",width:String(1e3)+"px",justifyContent:"center"},children:this.props.linkTileDetails.tiles.map((function(t){return Object(S.jsx)(St,{tile:t})}))}),Object(S.jsx)("div",{style:{position:"absolute",bottom:"0px"},children:Object(S.jsx)(mt.a,{theme:e,children:Object(S.jsx)(yt.a,(t={checked:this.props.photoDetails.photoVisible,onClick:this.props.togglePhoto},Object(Q.a)(t,"onClick",this.props.togglePhoto),Object(Q.a)(t,"color","primary"),Object(Q.a)(t,"name","photoBackground"),Object(Q.a)(t,"inputProps",{"aria-label":"primary checkbox"}),t))})}),this.props.photoDetails.photoVisible&&!this.props.photoDetails.loading?Object(S.jsx)("div",{style:{position:"absolute",bottom:"5px",right:"5px",color:this.props.viewDetails.fontColour},children:Object(S.jsxs)("p",{children:[Object(S.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.photo.links.html+"https://unsplash.com/?utm_source=tabsolute&utm_medium=referral",children:"Photo"})," by ",Object(S.jsxs)("a",{style:{color:this.props.viewDetails.fontColour},href:this.props.photoDetails.photo.user.links.html+"/?utm_source=tabsolute&utm_medium=referral",children:[this.props.photoDetails.photo.user.first_name," ",this.props.photoDetails.photo.user.last_name]})," on ",Object(S.jsx)("a",{style:{color:this.props.viewDetails.fontColour},href:"https://unsplash.com/?utm_source=tabsolute&utm_medium=referral",children:"Unsplash"})]})}):null]})}}]),i}(a.a.Component);var Vt=Object(d.b)((function(t,e){return{photoDetails:t.photoDetails,linkTileDetails:t.linkTileDetails,viewDetails:t.viewDetails}}),{fetchPhoto:wt,togglePhoto:kt})(Tt),Wt=function(t){Object(c.a)(i,t);var e=Object(p.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(S.jsx)("div",{children:"dashboard"===this.props.viewDetails.view?Object(S.jsx)(Ct,{}):Object(S.jsx)(Vt,{})})}}]),i}(a.a.Component);var At=Object(d.b)((function(t,e){return{viewDetails:t.viewDetails}}))(Wt),_t=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,68)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),n(t),a(t),s(t),o(t)}))};o.a.render(Object(S.jsx)(d.a,{store:M,children:Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(At,{})})}),document.getElementById("root")),_t()}},[[48,1,2]]]);
//# sourceMappingURL=main.33a7583c.chunk.js.map