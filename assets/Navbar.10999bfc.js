import{s as n,r as m,j as t,a as e}from"./index.0cf9e6d9.js";import{A as x}from"./index.esm.3fa73462.js";import"./iconBase.a90d9f08.js";const u="/web-expresso/assets/logodark.a35add7d.svg",w=n.nav`
    background-color: #f5f1edff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    padding: 0 5dvw;
    gap: 10%;
    font-family: "Courier New", Courier, monospace;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`,h=n.img`
    width: 10em;
`,g=n.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,i=n.div`
    color: #151515;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 768px) {
        margin: 10px 0;
        font-family: "Helvetica", sans-serif;
        font-size: 18px;
    }
`,C=n.button`
    background-color: #f5f1edff;
    border: solid 1px #121212;
    border-radius: 50px;
    width: 30em;
    padding: 10px 20px;
    color: #121212;
    cursor: pointer;
    font-size: 16px;
    font-family: "Courier New", Courier, monospace;
    @media (max-width: 768px) {
        margin: 1em;
        width: 100%;
    }
`;function v({scrollToSobre:s,scrollToServicos:d,scrollToPortfolio:a,scrollToPreco:l,scrollToForm:c,scrollToContato:f}){const o=window.innerWidth,[r,p]=m.exports.useState(o>768);return t(w,{children:[t("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",width:o>768?"50%":"100%"},children:[e(h,{src:u}),e(x,{size:"2em",onClick:()=>p(!r),style:{display:o>768?"none":"block"}})]}),r&&t(g,{children:[e(i,{onClick:s,children:"Sobre"}),e(i,{onClick:d,children:"Servi\xE7os"}),e(i,{onClick:a,children:"Portf\xF3lio"}),e(i,{onClick:l,children:"Pre\xE7o"}),e(i,{onClick:f,children:"Contato"})]}),e(C,{onClick:c,children:"Pedir or\xE7amento"})]})}export{v as default};
