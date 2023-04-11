import{s as l,j as c,a as o,r as x}from"./index.0cf9e6d9.js";const h={_origin:"https://api.emailjs.com"},E=(e,t="https://api.emailjs.com")=>{h._userID=e,h._origin=t},C=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class b{constructor(t){this.status=t.status,this.text=t.responseText}}const _=(e,t,a={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:n})=>{const d=new b(n);d.status===200||d.text==="OK"?r(d):i(d)}),s.addEventListener("error",({target:n})=>{i(new b(n))}),s.open("POST",h._origin+e,!0),Object.keys(a).forEach(n=>{s.setRequestHeader(n,a[n])}),s.send(t)}),y=(e,t,a,r)=>{const i=r||h._userID;C(i,e,t);const s={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:a};return _("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},S=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},k=(e,t,a,r)=>{const i=r||h._userID,s=S(a);C(i,e,t);const n=new FormData(s);return n.append("lib_version","3.2.0"),n.append("service_id",e),n.append("template_id",t),n.append("user_id",i),_("/api/v1.0/email/send-form",n)},q={init:E,send:y,sendForm:k},D=l.label`
    font-weight: 600;
`,F=l.input`
    border: none;
    border: 1px solid;

    border-radius: 5px;
    padding: 5px 10px;

    outline: none;

    &:focus {
        border-width: 2px;
    }
`;function f({id:e,label:t,type:a="text",required:r=!1,onChange:i}){return c("div",{style:{display:"flex",flexDirection:"column",marginBottom:"1rem"},children:[o(D,{htmlFor:e,children:t}),o(F,{id:e,name:e,type:a,required:r,onChange:i})]})}const j=l.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`,T=l.input`
    margin: 0 0.5rem;

    &:checked {
        background-color: #000;
    }
`,I=l.label`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
`;function p({id:e,label:t,required:a=!1}){return c(j,{children:[o(T,{id:e,name:e,type:"checkbox",required:a}),o(I,{children:t})]})}const L=l.div`
    padding: 1rem;
    background-color: #e6ffe6;
    border-radius: 5px;
    margin-bottom: 1rem;
`;function O(){return c(L,{children:[o("span",{style:{fontWeight:"bold"},children:"Sua solicit\xE7\xE3o foi enviada!"})," ","Entraremos em contato em breve."]})}const R="service_amgsmvp",N="template_a9k2w7v",P="W1NXJfm2l6E3WbKxh",z=l.form`
    display: flex;
    flex-direction: column;
    padding: 5vw;
`,A=l.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & > div {
        flex: 1;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;l.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;const v=l.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`,w=l.button`
    background-color: #0018f2;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #0013bb;
    }
`;function M(){const e=x.exports.useRef(),[t,a]=x.exports.useState(!1),[r,i]=x.exports.useState({nome:"",email:"",telefone:"",empresa:"",desc_empresa:"",capa_rotativa:!1,servicos:!1,portifolio:!1,galeria:!1,mapa:!1,contato:!1,wpp:!1});function s(u){u.preventDefault(),q.sendForm(R,N,e.current,P).then(g=>{console.log(g.text),n()},g=>{console.log(g.text)})}function n(){a(!0),setTimeout(()=>{a(!1)},5e3)}function d(u){i({...r,[u.target.id]:u.target.value})}function m(u){i({...r,[u.target.id]:u.target.checked})}return c(z,{id:"form",ref:e,onSubmit:s,children:[c(A,{children:[c("div",{children:[o(v,{children:"Solicite um or\xE7amento para o seu site dos sonhos"}),o(f,{id:"nome",label:"Nome*",required:!0,onChange:d,value:r.nome}),o(f,{id:"email",label:"Email*",required:!0,onChange:d,value:r.email}),o(f,{id:"telefone",label:"Telefone*",required:!0,value:r.telefone,onChange:d}),o(f,{id:"empresa",label:"Nome da empresa",required:!0,value:r.empresa,onChange:d}),o(f,{id:"desc_empresa",label:"Descri\xE7\xE3o da empresa",required:!0,value:r.desc_empresa,onChange:d}),o("p",{children:" * Campos obrigat\xF3rios"})]}),c("div",{children:[o(v,{children:"O que voc\xEA gostaria de ter na sua p\xE1gina?"}),o(p,{id:"capa_rotativa",label:"Capa rotativa",onChange:m,value:r.capa_rotativa}),o(p,{id:"servicos",label:"Servi\xE7os oferecidos",onChange:m,value:r.servicos}),o(p,{id:"portifolio",label:"Portifolio",onChange:m,value:r.portifolio}),o(p,{id:"galeria",label:"Exibir uma galeria de fotos",value:r.galeria,onChange:m}),o(p,{id:"mapa",label:"Localiza\xE7\xE3o no mapa",onChange:m,value:r.mapa}),o(p,{id:"contato",label:"Formul\xE1rio de or\xE7amento",value:r.contato,onChange:m}),o(p,{id:"wpp",label:"Bot\xE3o Whatsapp",onChange:m})]})]}),t&&o(O,{}),c("div",{style:{display:"flex",justifyContent:"space-between",gap:"1rem"},children:[o(w,{type:"reset",children:"Cancelar"}),o(w,{type:"submit",children:"Enviar"})]})]})}export{M as default};
