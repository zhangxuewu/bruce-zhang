import{u as i,a as _}from"./theme.bb482d99.js";import{d as l,f as p,w as t,h as u,o as f,c as m,_ as b}from"./framework.0700a41c.js";const v=l({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),s=r.carbonAds,{isAsideEnabled:a}=_(),o=p();let n=!1;function c(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,o.value.appendChild(e)}}return t(()=>d.value.relativePath,()=>{var e;n&&a.value&&((e=window._carbonads)==null||e.refresh())}),s&&u(()=>{a.value?c():t(a,e=>e&&c())}),(e,h)=>(f(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}});const w=b(v,[["__scopeId","data-v-c46c9d59"]]);export{w as default};
