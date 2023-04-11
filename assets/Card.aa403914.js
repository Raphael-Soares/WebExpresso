import{s as e,r as t,j as i,a as r}from"./index.0cf9e6d9.js";const f=e.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,l=e.img`
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`,m=e.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d2d2dff;
    margin: 1rem;
`,x=e.p`
    font-size: 1rem;
    font-weight: 500;
    color: #2d2d2dff;
    margin: 1rem;
`,h=e.div`
    width: 100%;
    height: 200px;
    background-color: #c4c4c4;
    border-radius: 10px 10px 0 0;
`;function p({image:o,title:d,text:s}){const[c,n]=t.exports.useState(!1);return t.exports.useEffect(()=>{const a=new Image;a.src=o,a.onload=()=>n(!0)},[o]),i(f,{children:[c?r(l,{src:o,alt:d}):r(h,{}),r(m,{children:d}),r(x,{children:s})]})}const u=t.exports.memo(p);export{u as C};
