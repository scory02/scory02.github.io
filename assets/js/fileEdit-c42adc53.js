import{e}from"./@vueuse-d3e9aa68.js";import{r as s,a as t,c as a,k as i,Y as l,j as o,a0 as r,u as p,z as u,Z as n,S as d,e as m,F as c,b as j}from"./@vue-1baf82e9.js";import{h as f,k as y,b as v}from"./naive-ui-1c491db7.js";import"./qrcode-3a4b8256.js";import"./encode-utf8-2ec93547.js";import"./dijkstrajs-b38e4460.js";import"./date-fns-222c3961.js";import"./vueuc-04e5b0aa.js";import"./evtd-2789e4a1.js";import"./seemly-0c71df87.js";import"./@css-render-7ffa2cfa.js";import"./vooks-a437919c.js";import"./vdirs-68b181a5.js";import"./@juggle-80d14552.js";import"./css-render-bd90028a.js";import"./@emotion-b17c1a96.js";import"./lodash-es-fff5457b.js";import"./treemate-2040dddb.js";import"./async-validator-8d480e59.js";const k={key:0},x={key:1},b={__name:"fileEdit",setup(b){const _=s("Text"),w=e({dataType:_,types:[{description:"text",accept:{"text/plain":[".txt",".html",".json"]}}],excludeAcceptAllOption:!0}),g=w.data,h=t({"支持":w.isSupported?"是":"否","文件":w.file,"文件名":w.fileName,"文件类型":w.fileMIME,"文件大小":w.fileSize,"文件上次修改日期":w.fileLastModified});async function z(){await w.save()}return(e,s)=>{const t=v,b=f,_=y;return j(),a(c,null,[i(b,null,{default:l((()=>[i(t,{type:"primary",onClick:s[0]||(s[0]=e=>p(w).open())},{default:l((()=>[u(" 打开文件 ")])),_:1}),i(t,{type:"primary",onClick:s[1]||(s[1]=e=>p(w).create())},{default:l((()=>[u(" 创建新文件 ")])),_:1}),i(t,{type:"success",disabled:!p(w).file.value,onClick:z},{default:l((()=>[u(" 保存 ")])),_:1},8,["disabled"]),i(t,{type:"success",disabled:!p(w).file.value,onClick:s[2]||(s[2]=e=>p(w).saveAs())},{default:l((()=>[u(" 另存为 ")])),_:1},8,["disabled"])])),_:1}),o("pre",null,r(JSON.stringify(p(h),null,2)),1),p(g)?(j(),a("div",k,[u(" 文件内容 "),"string"==typeof p(g)?(j(),n(_,{key:0,value:p(g),"onUpdate:value":s[3]||(s[3]=e=>d(g)?g.value=e:null),"w-full":"",autosize:{minRows:3,maxRows:20},clearable:"",type:"textarea",placeholder:"无数据"},null,8,["value"])):(j(),a("span",x,r(p(g)),1))])):m("",!0)],64)}}};export{b as default};
