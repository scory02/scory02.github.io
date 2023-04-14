import{u as e}from"./vue-router-3b0e2eb8.js";import{A as t}from"./@amap-a03a8b99.js";import{a as o}from"./index-ce6d66f0.js";import{_ as r}from"./vue3-splitpane-9ef15b96.js";import{r as a,v as i,h as s,c as n,j as l,b as m}from"./@vue-1baf82e9.js";/* empty css                    */import"./@vueuse-d3e9aa68.js";import"./qrcode-3a4b8256.js";import"./encode-utf8-2ec93547.js";import"./dijkstrajs-b38e4460.js";import"./naive-ui-1c491db7.js";import"./date-fns-222c3961.js";import"./vueuc-04e5b0aa.js";import"./evtd-2789e4a1.js";import"./seemly-0c71df87.js";import"./@css-render-7ffa2cfa.js";import"./vooks-a437919c.js";import"./vdirs-68b181a5.js";import"./@juggle-80d14552.js";import"./css-render-bd90028a.js";import"./@emotion-b17c1a96.js";import"./lodash-es-fff5457b.js";import"./treemate-2040dddb.js";import"./async-validator-8d480e59.js";import"./pinia-0d4f4653.js";import"./echarts-9c2009b0.js";import"./zrender-3ff8857f.js";import"./tslib-a4e99503.js";import"./axios-9a30b300.js";import"./mockjs-7e8f174a.js";import"./crypto-js-fe439614.js";import"./splitpanes-0469364f.js";import"./@kjgl77-f0f1912f.js";import"./@vicons-a2c8b0eb.js";import"./qs-94839265.js";import"./side-channel-a959ba82.js";import"./get-intrinsic-fee8135b.js";import"./has-symbols-456daba2.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-af191d86.js";import"./object-inspect-89bb0d45.js";const p=r({__name:"emap",setup(r){const p=e(),c=a(null);i();const d="ade7faec217f922d983a664150ba0fe1";var h,f,u={},g=[{cityName:"全国",code:1e5}],y=0,b=["2015","2016","2017","2018","2019"];function j(e){(function(e,t=""){return new Promise(((o,r)=>{function a(e,t){AMapUI.loadUI(["geo/DistrictExplorer"],(i=>{(new i).loadAreaNode(e,(function(i,s){if(i)return void r(i);let n=s.getSubFeatures();if(0!==n.length)t&&(n=n.filter((e=>e.properties.adcode==t))),o({features:n});else{let t=s._data.geoData.parent.properties.acroutes;a(t[t.length-1],e)}}))}))}a(e,t)}))})(e).then((e=>{u=e,v()}))}function v(){let e=[],t=[],r=0;u.features.forEach((o=>{let a=3e3*Math.random();e.push({name:o.properties.name,value:a,cityCode:o.properties.adcode}),t.push({name:o.properties.name,value:[o.properties.center[0],o.properties.center[1],a],cityCode:o.properties.adcode}),r+=a})),e=e.sort((function(e,t){return t.value-e.value})),function(e,t,r){var a=[],i=[],s=e[e.length-1].value,n=e[0].value;1===e.length&&(s=0);e.forEach((e=>{a.unshift(e.name),i.unshift(e.value)}));var l={timeline:{data:b,axisType:"category",autoPlay:!0,playInterval:5e3,left:"10%",right:"10%",bottom:"2%",width:"80%",label:{normal:{textStyle:{color:"rgb(179, 239, 255)"}},emphasis:{textStyle:{color:"#fff"}}},currentIndex:y,symbolSize:10,lineStyle:{color:"#8df4f4"},checkpointStyle:{borderColor:"#8df4f4",color:"#53D9FF",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#53D9FF",borderColor:"#53D9FF"},emphasis:{color:"rgb(58,115,192)",borderColor:"rgb(58,115,192)"}}},baseOption:{backgroundColor:"#012248",title:[{left:"center",top:10,text:g[g.length-1].cityName+"销售额统计图(可点击下钻到县)",textStyle:{color:"rgb(179, 239, 255)",fontSize:16}},{text:"销售总额："+t.toFixed(2)+"万",left:"center",top:"6.5%",textStyle:{color:"#FFAC50",fontSize:26}}],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{right:"2%",top:"12%",bottom:"8%",width:"20%"},toolbox:{feature:{restore:{show:!1},dataView:{show:!1},saveAsImage:{name:g[g.length-1].cityName+"销售额统计图"},dataZoom:{show:!1},magicType:{show:!1}},iconStyle:{normal:{borderColor:"#1990DA"}},top:15,right:35},geo:{map:1===g.length?"china":"map",zoom:1.1,roam:!1,left:"10%",top:"15%",tooltip:{trigger:"item",formatter:e=>{let t=e.value[2];return window.isNaN(t)&&(t=0),"<div style='text-align:left'>"+e.name+":<br />销售额："+t.toFixed(2)+"万</div>"}},label:{normal:{show:!0,color:"rgb(249, 249, 249)",formatter:e=>{switch(e.name){case"内蒙古自治区":e.name="内蒙古";break;case"西藏自治区":e.name="西藏";break;case"新疆维吾尔自治区":e.name="新疆";break;case"宁夏回族自治区":e.name="宁夏";break;case"广西壮族自治区":e.name="广西";break;case"香港特别行政区":e.name="香港";break;case"澳门特别行政区":e.name="澳门"}return e.name}},emphasis:{show:!0,color:"#f75a00"}},itemStyle:{normal:{areaColor:"#24CFF4",borderColor:"#53D9FF",borderWidth:1.3,shadowBlur:15,shadowColor:"rgb(58,115,192)",shadowOffsetX:7,shadowOffsetY:6},emphasis:{areaColor:"#8dd7fc",borderWidth:1.6,shadowBlur:25}}},visualMap:{min:s,max:n,left:"3%",bottom:"5%",calculable:!0,seriesIndex:[0],inRange:{color:["#24CFF4","#2E98CA","#1E62AC"]},textStyle:{color:"#24CFF4"}},xAxis:{type:"value",scale:!0,position:"top",boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#455B77"}},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#c0e6f9"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#455B77"}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"#c0e6f9"}},data:a},series:[{name:b[y]+"年销售额度",type:"map",geoIndex:0,map:1===g.length?"china":"map",roam:!0,zoom:1.3,tooltip:{trigger:"item",formatter:e=>{let t=e.value;if("南海诸岛"!=e.name)return window.isNaN(t)&&(t=0),"<div style='text-align:left'>"+e.name+":<br />销售额："+t.toFixed(2)+"万</div>"}},label:{normal:{show:!1},emphasis:{show:!1}},data:e},{name:"散点",type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"fill"},itemStyle:{normal:{color:"#F4E925",shadowBlur:10,shadowColor:"#333"}},data:r,symbolSize:function(e){return e[2]==n?27:10},showEffectOn:"render"},{type:"bar",barGap:"-100%",barCategoryGap:"60%",itemStyle:{normal:{color:"#11AAFE"},emphasis:{show:!1}},data:i}]}};h?(f.registerMap(1===g.length?"china":"map",u),h.setOption(l)):o(c,l,((e,t)=>{h=e,f=t,t.registerMap(1===g.length?"china":"map",u),e.on("click",x),e.on("timelinechanged",(e=>{y=e.currentIndex,v()})),setTimeout((()=>{e.setOption(l)}),1e3)}))}(e,r,t)}function x(e){if(e.data){if(g[g.length-1].code==e.data.cityCode)return;let t=e.data;g.push({cityName:t.name,code:t.cityCode}),j(t.cityCode)}}function w(){1!==g.length?(g.pop(),j(g[g.length-1].code)):p.replace("/manage")}return s((()=>{t.load({key:d,AMapUI:{version:"1.1",plugins:["overlay/SimpleMarker"]},version:"2.0"}).then((e=>{j(1e5)}))})),(e,t)=>(m(),n("div",null,[l("div",{id:"emap",ref_key:"emapRef",ref:c},null,512),l("div",{class:"back animate-bounce",onClick:w},"返 回")]))}},[["__scopeId","data-v-e2d38b41"]]);export{p as default};
