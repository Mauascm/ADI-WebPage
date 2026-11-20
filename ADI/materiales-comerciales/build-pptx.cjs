/* Editable PowerPoint counterparts to the PDF sales material. */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path');
const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
const C = { ink:'111111', dark:'222222', surface:'242424', line:'484848', white:'FFFFFF', soft:'D4D4D4', muted:'BDBDBD', yellow:'FFFF00', paper:'F2F2EF', paperText:'222222', paperMuted:'555555' };
const F = { body:'Arial', display:'Arial' };
// Transparent PNGs are faithful renders of the original SVGs in public/branding.
// PNG also opens reliably in PowerPoint, Keynote, and Quick Look.
const logoDark = path.join(__dirname,'assets','adi-logo-dark.png');
const logoLight = path.join(__dirname,'assets','adi-logo-light.png');
const symbol = path.join(__dirname,'assets','adi-symbol-yellow.png');

function shape(slide,x,y,w,h,fill,lineColor=fill,lineWidth=0.1,extra={}) {
  slide.addShape(pptx.ShapeType.rect,{x,y,w,h,rectRadius:0,fill:{color:fill},line:{color:lineColor,width:lineWidth},...extra});
}
function rule(slide,x,y,w,color=C.line,width=0.7) {
  slide.addShape(pptx.ShapeType.line,{x,y,w,h:0,line:{color,width}});
}
function text(slide,s,x,y,w,h,size=12,color=C.white,opt={}) {
  slide.addText(s,{x,y,w,h,fontFace:opt.display?F.display:F.body,fontSize:size,color,bold:!!opt.bold,margin:0,breakLine:false,valign:'top',fit:'shrink',align:opt.align||'left',charSpacing:opt.charSpacing||0,lineSpacingMultiple:1.0,...opt});
}
function label(slide,s,x,y,w,color=C.muted,size=8) {
  text(slide,s,x,y,w,0.19,size,color,{bold:true,charSpacing:1.2});
}
function addLogo(slide,which,x,y,w) {
  slide.addImage({path:which,x,y,w,h:w/2.6176});
}
function slideFoot(slide,left,n,dark=false) {
  const color=dark?C.paperText:C.muted;
  rule(slide,.68,7.02,11.97,dark?'999900':C.line,.7);
  label(slide,left,.68,7.14,11.2,color,7);
  text(slide,String(n).padStart(2,'0')+' / 06',12.1,7.14,.55,.18,7,color,{bold:true,align:'right'});
}
function slideTop(slide,left,right,dark=false) {
  const color=dark?C.paperText:C.muted;
  label(slide,left,.68,.52,5.5,color,7.6);
  text(slide,right,8.0,.52,4.65,.2,7.6,color,{bold:true,align:'right',charSpacing:1});
}

async function makeDeck() {
  pptx.layout='LAYOUT_WIDE';
  pptx.author='ADI — Advanced Data Intelligence';
  pptx.subject='Presentación comercial de servicios';
  pptx.title='ADI | Presentación comercial de 6 páginas';
  pptx.company='ADI';
  pptx.lang='es-MX';
  pptx.theme={headFontFace:F.display,bodyFontFace:F.body,lang:'es-MX'};

  // 01 / Core proposition
  let s=pptx.addSlide(); s.background={color:C.ink};
  addLogo(s,logoDark,.68,.47,1.84);
  text(s,'PRESENTACIÓN COMERCIAL / 2026',9.55,.58,3.1,.18,7.6,C.muted,{bold:true,align:'right',charSpacing:1});
  label(s,'ADI / DATA & AI OFFICE',.68,2.18,3.4,C.yellow,8);
  text(s,'Tu equipo de',.68,2.55,7.35,.58,38,C.white,{bold:true});
  text(s,'Datos + IA.',.68,3.12,6.65,.63,43,C.yellow,{bold:true});
  text(s,'Sin construirlo desde cero.',.68,3.79,7.65,.55,32,C.muted,{bold:true});
  text(s,'Una capacidad externa y continua, integrada a tu negocio para conectar información con las decisiones que importan.',.68,4.7,6.55,.72,14,C.soft);
  shape(s,8.15,1.7,4.46,4.45,'1A1A1A',C.line,.75);
  for(let i=1;i<12;i++){rule(s,8.15,1.7+i*.37,4.46,'282828',.35);s.addShape(pptx.ShapeType.line,{x:8.15+i*.37,y:1.7,w:0,h:4.45,line:{color:'282828',width:.35}})}
  s.addShape(pptx.ShapeType.ellipse,{x:8.7,y:2.25,w:3.35,h:3.35,fill:{color:'1A1A1A',transparency:100},line:{color:'797900',width:.8}});
  s.addShape(pptx.ShapeType.ellipse,{x:9.15,y:2.70,w:2.45,h:2.45,fill:{color:'1A1A1A',transparency:100},line:{color:'4F4F4F',width:.6,dash:'dash'}});
  shape(s,9.47,3.02,1.83,1.83,C.dark,C.yellow,.8);
  s.addImage({path:symbol,x:9.81,y:3.36,w:1.15,h:1.15});
  label(s,'ADI / SISTEMA 01',8.4,1.95,2.0,C.soft,6.9);
  text(s,'DATOS  →  CRITERIO  →  ACCIÓN',9.35,5.78,2.95,.17,6.8,C.soft,{bold:true,align:'right',charSpacing:.4});
  slideFoot(s,'UNA RELACIÓN. MÚLTIPLES DISCIPLINAS.',1);

  // 02 / Problem and decision examples
  s=pptx.addSlide(); s.background={color:C.paper};
  slideTop(s,'01 / LA OPORTUNIDAD','ADI — ADVANCED DATA INTELLIGENCE',true);
  text(s,'Tener datos no es',.68,1.34,5.4,.54,33,C.paperText,{bold:true});
  text(s,'tener una respuesta.',.68,1.88,5.75,.54,33,'777777',{bold:true});
  text(s,'La información ya existe. El reto es unir fuentes, reglas y responsables para responder una pregunta de negocio con confianza.',6.65,1.49,5.85,.75,13,C.paperMuted);
  const boxes=[{x:.68,w:3.57,title:'Información\ndispersa',small:'HOY',desc:'ERP, CRM, archivos, procesos y versiones distintas.',fill:C.paper,lc:C.paperText,tc:C.paperText,dc:C.paperMuted},{x:4.68,w:4.00,title:'Contexto\ncompartido',small:'CON ADI',desc:'Ingeniería, analítica, automatización e IA coordinadas.',fill:C.dark,lc:C.yellow,tc:C.white,dc:C.soft},{x:9.13,w:3.52,title:'Una siguiente\nacción clara',small:'PARA DECIDIR',desc:'Métricas definidas, trazabilidad y seguimiento.',fill:C.paper,lc:C.paperText,tc:C.paperText,dc:C.paperMuted}];
  boxes.forEach((b,i)=>{if(i===1)shape(s,b.x,3.36,b.w,2.37,b.fill,b.fill,.1);rule(s,b.x,3.36,b.w,b.lc,1.3);label(s,b.small,b.x+.22,3.58,b.w-.44,i===1?C.yellow:'666666',7);text(s,b.title,b.x+.22,3.89,b.w-.45,.84,21,b.tc,{bold:true});text(s,b.desc,b.x+.22,4.86,b.w-.45,.53,10.5,b.dc)});
  text(s,'→',4.35,4.48,.25,.35,21,C.paperMuted,{align:'center'});
  text(s,'→',8.83,4.48,.25,.35,21,C.paperMuted,{align:'center'});
  rule(s,.68,6.42,11.97,'BDBDB8',.7);
  text(s,'FINANZAS  →  Revisar desviaciones',.68,6.58,3.48,.26,9,C.paperText);
  text(s,'INVENTARIO  →  Priorizar reposición',4.45,6.58,3.48,.26,9,C.paperText);
  text(s,'OPERACIONES  →  Intervenir cuellos de botella',8.2,6.58,4.2,.26,9,C.paperText);
  slideFoot(s,'ESCENARIOS ILUSTRATIVOS; NO SON CASOS DE CLIENTES NI RESULTADOS MEDIDOS.',2,true);

  // 03 / Eight capabilities
  s=pptx.addSlide(); s.background={color:C.ink};
  slideTop(s,'02 / LAS CAPACIDADES','UNA RELACIÓN · OCHO DISCIPLINAS');
  text(s,'El equipo que cada',.68,1.34,6.1,.52,32,C.white,{bold:true});
  text(s,'iniciativa necesita.',.68,1.86,6.2,.52,32,C.yellow,{bold:true});
  text(s,'Distintas especialidades trabajan con el mismo contexto de negocio y se activan según la prioridad.',6.62,1.61,5.7,.65,13,C.soft);
  const cols=[
    {x:.68,title:'La base confiable',lab:'01 / CONECTAR',items:['Ingeniería de datos','Arquitectura de datos','Cloud y soluciones']},
    {x:3.76,title:'La respuesta útil',lab:'02 / ENTENDER',items:['BI y analítica','Ciencia de datos']},
    {x:6.84,title:'La operación',lab:'03 / ACTUAR',items:['IA y machine learning','Automatización']},
    {x:9.92,title:'La confianza',lab:'TRANSVERSAL',items:['Gobierno de datos']}
  ];
  cols.forEach((c,i)=>{rule(s,c.x,3.51,2.73,C.yellow,1.3);label(s,c.lab,c.x,3.75,2.72,C.yellow,7.3);text(s,c.title,c.x,4.03,2.75,.38,17,C.white,{bold:true});c.items.forEach((item,j)=>{text(s,'↗',c.x,4.56+j*.33,.2,.2,10,C.yellow);text(s,item,c.x+.23,4.57+j*.33,2.55,.22,10,C.soft)});if(i<3)s.addShape(pptx.ShapeType.line,{x:c.x+2.88,y:3.5,w:0,h:2.62,line:{color:C.line,width:.65}})});
  text(s,'IA con criterio: primero una decisión que mejorar; después datos, reglas, permisos y contexto.',.68,6.53,11.8,.25,10,C.soft);
  slideFoot(s,'DATOS → DECISIONES → RESULTADOS',3);

  // 04 / Three service routes
  s=pptx.addSlide(); s.background={color:C.ink};
  slideTop(s,'03 / CÓMO TRABAJAMOS','CAPACIDAD ACORDADA Y PRIORIZADA');
  text(s,'Tres formas de avanzar.',.68,1.2,8.2,.55,32,C.white,{bold:true});
  text(s,'Un mismo criterio.',.68,1.75,7.2,.52,32,C.yellow,{bold:true});
  const offers=[
    {x:.68,w:4.6,lab:'OFERTA PRINCIPAL / 01',title:'Data & AI Office',desc:'Capacidad recurrente, especialistas según la iniciativa y un roadmap compartido. Sprints con resultados utilizables y conocimiento que permanece.',tail:'Ingeniería · BI · analítica · automatización · IA',fill:'303018',border:'777700'},
    {x:5.39,w:3.55,lab:'FORMACIÓN / 02',title:'Capacitación aplicada',desc:'Rutas para equipos, áreas, perfiles técnicos y directivos, sobre un reto real de la organización.',tail:'Un entregable para probar y mejorar',fill:C.surface,border:C.line},
    {x:9.05,w:3.6,lab:'GOBERNANZA / 03',title:'AI Governance\n& Compliance',desc:'Riesgos, políticas, privacidad, contratos y controles técnicos según el alcance y la jurisdicción.',tail:'También como consultoría independiente',fill:C.surface,border:C.line}
  ];
  offers.forEach((o,i)=>{shape(s,o.x,3.1,o.w,2.65,o.fill,o.border,.75);if(i===0)rule(s,o.x,3.1,o.w,C.yellow,1.4);label(s,o.lab,o.x+.2,3.3,o.w-.4,C.yellow,7.2);text(s,o.title,o.x+.2,3.68,o.w-.4,.54,18,C.white,{bold:true});text(s,o.desc,o.x+.2,4.3,o.w-.4,.83,10.2,C.soft);text(s,o.tail,o.x+.2,5.42,o.w-.4,.2,8,C.yellow)});
  rule(s,.68,6.21,11.97,C.line,.7);
  const steps=['ACORDAR','PRIORIZAR','CONSTRUIR','VALIDAR','REPRIORIZAR'];
  steps.forEach((v,i)=>{const x=.68+i*2.87;text(s,v,x,6.4,1.85,.22,8,C.white,{bold:true,charSpacing:.6});if(i<4)text(s,'→',x+1.92,6.37,.25,.25,15,C.yellow)});
  slideFoot(s,'LA CAPACIDAD ES FINITA; CADA CICLO SE ACUERDA CON EL NEGOCIO.',4);

  // 05 / Plans on one full slide
  s=pptx.addSlide(); s.background={color:C.ink};
  slideTop(s,'04 / PLANES DATA & AI OFFICE','MXN + IVA / MES');
  text(s,'Un modelo.',.68,1.08,5.5,.53,33,C.white,{bold:true});
  text(s,'Cinco escalas.',.68,1.6,5.7,.53,33,C.yellow,{bold:true});
  text(s,'Precios mensuales fijos. Cada nivel amplía la capacidad disponible; el alcance y los entregables se acuerdan según la iniciativa.',6.7,1.44,5.65,.62,12,C.soft);
  const plans=[
    {name:'01 / ESSENTIAL',price:'$70,000',desc:'Orden y eficiencia inicial.',features:['BI y dashboards','Automatización de procesos','Hasta 2 fuentes de datos','1 área de negocio']},
    {name:'02 / GROWTH',price:'$135,000',desc:'Integración y análisis.',features:['Analítica avanzada','Integración intermedia','Automatización','Hasta 4 fuentes · 2 áreas']},
    {name:'03 / INTELLIGENCE',price:'$219,000',desc:'Anticipación y gobierno.',features:['Forecasting','Gobierno de datos e IA','Consultoría regulatoria','Hasta 6 fuentes · 3 áreas']},
    {name:'04 / AI',price:'$319,000',desc:'IA en operación.',features:['ML y agentes','Controles técnicos','Supervisión y seguimiento','Hasta 10 fuentes · 5 áreas']},
    {name:'05 / ENTERPRISE',price:'A medida',desc:'Capacidad diseñada para ti.',features:['Arquitectura propia','Alcance y equipo acordados','Acompañamiento integral','Fuentes y áreas a medida']}
  ];
  plans.forEach((p,i)=>{
    const x=.68+i*2.43,w=2.29,y=3.05,h=3.28;
    shape(s,x,y,w,h,i===2?'30301B':C.dark,i===2?'8C8C32':C.line,.8);
    rule(s,x,y,w,C.yellow,1.4);
    label(s,p.name,x+.16,y+.23,w-.32,C.yellow,6.7);
    text(s,p.price,x+.16,y+.62,w-.32,.35,21,C.white,{bold:true});
    text(s,p.desc,x+.16,y+1.06,w-.32,.35,9.5,C.soft);
    rule(s,x+.16,y+1.52,w-.32,C.line,.6);
    p.features.forEach((f,j)=>{
      text(s,'↗',x+.16,y+1.7+j*.38,.16,.17,8.5,C.yellow);
      text(s,f,x+.36,y+1.7+j*.38,w-.52,.31,8.7,C.white);
    });
  });
  slideFoot(s,'LÍMITES DE REFERENCIA; ALCANCE, COMPLEJIDAD Y CONDICIONES SE DEFINEN EN CONTRATO.',5);

  // 06 / Next step
  s=pptx.addSlide(); s.background={color:C.yellow};
  slideTop(s,'05 / EL SIGUIENTE PASO','',true);
  addLogo(s,logoLight,11.1,.49,1.55);
  text(s,'Una prioridad.',.68,1.16,6.7,.58,34,C.paperText,{bold:true});
  text(s,'Un primer paso.',.68,1.73,6.7,.58,34,C.paperText,{bold:true});
  label(s,'DE LA CONVERSACIÓN A UNA PROPUESTA CONCRETA',.68,3.12,5.8,C.paperText,7.5);
  rule(s,.68,3.42,5.77,'777700',.7);
  const nextSteps=['Entendemos la decisión o fricción operativa.','Revisamos datos, responsables y viabilidad.','Acordamos una primera prioridad y su alcance.'];
  nextSteps.forEach((item,i)=>{let y=3.58+i*.7;text(s,String(i+1).padStart(2,'0'),.68,y,.5,.35,18,C.paperText,{bold:true});text(s,item,1.24,y,5.17,.45,13,C.paperText,{bold:true});rule(s,.68,y+.55,5.77,'999900',.55)});
  text(s,'No necesitas definir toda la transformación para empezar.',.68,5.85,5.77,.38,10,C.paperText);
  shape(s,6.89,3.09,5.76,3.58,C.dark,C.dark,.1);
  label(s,'CONVERSEMOS SOBRE TU PRIORIDAD',7.18,3.38,4.9,C.yellow,7.5);
  text(s,'¿Qué decisión o problema operativo merece hoy una mejor respuesta?',7.18,3.78,5.1,1.18,22,C.white,{bold:true});
  text(s,'contacto@adi-mx.com  ↗',7.18,5.83,4.7,.22,10,C.yellow,{bold:true,hyperlink:{url:'mailto:contacto@adi-mx.com'}});
  text(s,'adi-web-page.vercel.app  ↗',7.18,6.12,4.7,.22,10,C.yellow,{bold:true,hyperlink:{url:'https://adi-web-page.vercel.app/planes'}});
  slideFoot(s,'ADI / ADVANCED DATA INTELLIGENCE',6,true);
  await pptx.writeFile({fileName:path.join(__dirname,'ADI_Presentacion_Comercial_6_Paginas.pptx')});
}

async function makeOnePager() {
  const p=new pptxgen();
  p.defineLayout({name:'ADI_A4',width:8.27,height:11.69}); p.layout='ADI_A4';
  p.author='ADI — Advanced Data Intelligence'; p.title='ADI | One pager comercial'; p.company='ADI'; p.lang='es-MX';
  p.theme={headFontFace:F.display,bodyFontFace:F.body,lang:'es-MX'};
  let s=p.addSlide(); s.background={color:C.paper};
  shape(s,0,0,8.27,5.2,C.ink,C.ink,.1);
  addLogo(s,logoDark,.59,.42,1.68);
  label(s,'ADI / DATA & AI OFFICE',5.65,.53,2.03,C.muted,7);
  label(s,'LA CAPACIDAD DETRÁS DE TU PRÓXIMA DECISIÓN',.59,1.5,5.3,C.yellow,7.5);
  text(s,[{text:'Tu equipo de ',options:{color:C.white}},{text:'Datos + IA.',options:{color:C.yellow}}],.59,1.9,7.0,.47,27,C.white,{bold:true});
  text(s,'Sin construirlo desde cero.',.59,2.38,7.0,.48,27,C.muted,{bold:true});
  text(s,'Una capacidad externa y continua, integrada a tu negocio. Conectamos información, especialistas y contexto para mejorar las decisiones que importan.',.59,3.13,6.9,.75,12,C.soft);
  rule(s,.59,4.08,7.09,C.line,.7);
  const flow=[{x:.59,w:2.08,lab:'01 / INFORMACIÓN',body:'Sistemas · procesos · personas'},{x:2.94,w:2.45,lab:'02 / ADI',body:'Datos · analítica · automatización · IA'},{x:5.65,w:2.03,lab:'03 / DECISIÓN',body:'Prioridades · operación · resultados'}];
  flow.forEach(f=>{label(s,f.lab,f.x,4.25,f.w,C.yellow,7);text(s,f.body,f.x,4.52,f.w,.3,9,C.soft)});
  text(s,'→',2.71,4.47,.2,.21,13,C.yellow);text(s,'→',5.42,4.47,.2,.21,13,C.yellow);
  rule(s,.59,4.96,7.09,C.line,.7);
  label(s,'QUÉ OFRECEMOS',.59,5.54,2.0,'444444',7);
  text(s,'Una relación. Distintas formas de avanzar.',.59,5.8,7.1,.37,19,C.paperText,{bold:true});
  const service=[
    {n:'01',title:'Data & AI Office',desc:'Capacidad recurrente de ingeniería, arquitectura, BI, ciencia de datos, automatización e IA. Especialistas según la iniciativa, roadmap compartido y continuidad técnica.'},
    {n:'02',title:'Capacitación aplicada',desc:'Programas para equipos, áreas de negocio, perfiles técnicos y directivos. Cada ruta trabaja un reto real y termina con un entregable que el equipo puede probar y mejorar.'},
    {n:'03',title:'AI Governance\n& Compliance',desc:'Diagnóstico de riesgos, políticas, privacidad, revisión de contratos y controles técnicos. Se integra a ciertos planes o se contrata como consultoría independiente.'}
  ];
  service.forEach((v,i)=>{const y=6.42+i*.95;rule(s,.59,y,7.09,'C7C7C2',.6);text(s,v.n,.59,y+.17,.28,.2,9,'666666',{bold:true});text(s,v.title,1.1,y+.14,2.1,.55,13,C.paperText,{bold:true});text(s,v.desc,3.4,y+.14,4.25,.65,9,C.paperMuted)});
  rule(s,.59,9.27,7.09,'C7C7C2',.6);
  label(s,'EL MODELO',.59,9.55,1.45,'555555',7);
  text(s,'Priorizar  →  Conectar  →  Construir  →  Validar  →  Repriorizar',2.42,9.53,5.25,.22,8.5,C.paperText,{bold:true});
  shape(s,0,10.02,8.27,1.67,C.yellow,C.yellow,.1);
  label(s,'EMPECEMOS POR UNA PRIORIDAD',.59,10.19,3.2,C.paperText,7);
  label(s,'DATOS → DECISIONES → RESULTADOS',5.31,10.19,2.36,C.paperText,7);
  rule(s,.59,10.43,7.09,'777700',.6);
  text(s,'Conversemos sobre\ntu primera prioridad.',.59,10.59,3.5,.55,17,C.paperText,{bold:true});
  text(s,'contacto@adi-mx.com  ↗',.59,11.27,2.15,.2,8,C.paperText,{bold:true,hyperlink:{url:'mailto:contacto@adi-mx.com'}});
  text(s,'adi-web-page.vercel.app  ↗',2.7,11.27,2.12,.2,8,C.paperText,{bold:true,hyperlink:{url:'https://adi-web-page.vercel.app/'}});
  s.addShape(pptx.ShapeType.line,{x:4.92,y:10.56,w:0,h:.83,line:{color:'777700',width:.7}});
  label(s,'PLANES DATA & AI OFFICE DESDE',5.09,10.56,2.54,C.paperText,6.5);
  text(s,'$70,000 MXN',5.09,10.74,2.54,.29,17,C.paperText,{bold:true});
  text(s,'+ IVA / MES  ·  Explorar los planes ↗',5.09,11.11,2.6,.22,8,C.paperText,{bold:true,hyperlink:{url:'https://adi-web-page.vercel.app/planes'}});
  text(s,'Precios mensuales fijos. Límites de fuentes y áreas como referencia comercial; alcance, complejidad y condiciones se acuerdan en contrato.',.59,11.55,7.07,.1,5.9,'444444');
  await p.writeFile({fileName:path.join(__dirname,'ADI_One_Pager_Comercial.pptx')});
}

(async()=>{await makeDeck();await makeOnePager()})().catch(e=>{console.error(e);process.exit(1)});
