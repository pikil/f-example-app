"use strict";(self["webpackChunkf_example_app"]=self["webpackChunkf_example_app"]||[]).push([[169],{879:(e,t,a)=>{a.d(t,{DB:()=>n});var l=a(9387);const n=new l.ZP("exampleDB");n.version(1).stores({jobs:"++id, status, clientFName, clientLName, clientPhone, clientEmail, timeCreated"})},253:(e,t,a)=>{a.d(t,{Du:()=>n,HF:()=>s,ig:()=>l});const l=0,n=20,s="YYYY-MM-DD HH:mm"},5565:(e,t,a)=>{a.d(t,{Z:()=>l});const l=[{label:"Scheduled",value:0},{label:"Active",value:1},{label:"Invoicing",value:2},{label:"To Priced",value:3},{label:"Completed",value:4}]},2796:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(879),n=a(253),s=a(5565),o=a(5836),i=a(4002);class r{constructor(e,t,a,l,n){this.reset(e,t,a,l,n)}get id(){return this._id}get status(){return this._status}set status(e){e=parseInt(e),this._status=!Number.isNaN(this._status)&&s.Z.findIndex((({value:t})=>t===e))>=0?e:n.ig}get client(){return this._client}set client(e){this._client=e||new o.Z}get notes(){return this._notes}set notes(e){this._notes=Array.isArray(e)?e.map((({text:e,time:t})=>new i.Z(e,t))):[]}get timeCreated(){return this._timeCreated}set timeCreated(e){e=parseInt(e),this._timeCreated=!Number.isNaN(e)&&e>0?e:Date.now()}setStatus(e){this.status=e,this.save()}async addNote(e){this.notes.unshift(new i.Z(e)),this.save()}reset(e,t,a,l,n){this._id=e,this.status=t,this.client=a,this.notes=l,this.timeCreated=n}clear(){this.reset()}async save(){const e={id:null,clientFName:this.client.fName,clientLName:this.client.lName,clientPhone:this.client.phone,clientEmail:this.client.email,timeCreated:this.timeCreated,status:this.status,notes:this.notes.map((e=>({text:e.text,time:e.time})))},t=parseInt(this.id);!Number.isNaN(t)&&t>0?e.id=t:(delete e.id,e.timeCreated=Date.now());const a=await l.DB.jobs.put(e);return a}}},5836:(e,t,a)=>{a.d(t,{Z:()=>l});class l{constructor(e,t,a,l){this.fName=null!==e&&void 0!==e?e:"",this.lName=null!==t&&void 0!==t?t:"",this.email=null!==a&&void 0!==a?a:"",this.phone=null!==l&&void 0!==l?l:""}get fName(){return this._fName}set fName(e){this._fName=e.toString()}get lName(){return this._lName}set lName(e){this._lName=e.toString()}get email(){return this._email}set email(e){this._email=e.toString()}get phone(){return this._phone}set phone(e){this._phone=e.toString()}}},4002:(e,t,a)=>{a.d(t,{Z:()=>l});class l{constructor(e,t){this.text=e,this.time=t}get time(){return this._time}set time(e){e=parseInt(e),this._time=!Number.isNaN(e)&&e>0?e:Date.now()}get text(){return this._text}set text(e){this._text=e.substring(0,255)}}},8007:(e,t,a)=>{a.d(t,{m:()=>n});var l=a(2502);const n=(0,l.Q_)("system",{state:()=>({jobAdderDialog:!1,lastNewJobId:0}),actions:{setJobAdder(e){this.jobAdderDialog=e},setLastNewJobId(e){this.lastNewJobId=e}}})},5907:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9835);function n(e,t,a,n,s,o){const i=(0,l.up)("q-select");return(0,l.wg)(),(0,l.j4)(i,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),options:e.JobStatuses,dense:"",outlined:"","dropdown-icon":e.fasAngleDown,label:"Status"},null,8,["modelValue","options","dropdown-icon"])}var s=a(5565),o=a(353);const i=(0,l.aZ)({props:{modelValue:{type:[Number,String],required:!0}},setup(e,{emit:t}){return{JobStatuses:s.Z,fasAngleDown:o.f9z,value:(0,l.Fl)({get:()=>{const t=s.Z.find((({value:t})=>t===e.modelValue));return t||null},set:({value:e})=>{t("update:modelValue",e)}})}}});var r=a(1639),u=a(4055),d=a(9984),c=a.n(d);const m=(0,r.Z)(i,[["render",n]]),p=m;c()(i,"components",{QSelect:u.Z})},4169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_e});var l=a(9835),n=a(6970);const s={class:"row items-center q-col-gutter-x-md"},o=(0,l._)("div",{class:"col"},"Links",-1),i={class:"col-auto"};function r(e,t,a,r,u,d){const c=(0,l.up)("router-link"),m=(0,l.up)("q-toolbar-title"),p=(0,l.up)("q-btn"),b=(0,l.up)("q-toolbar"),h=(0,l.up)("q-header"),f=(0,l.up)("q-item-label"),g=(0,l.up)("essential-link"),w=(0,l.up)("q-list"),v=(0,l.up)("q-drawer"),_=(0,l.up)("new-job-adder"),Z=(0,l.up)("router-view"),N=(0,l.up)("q-page-container"),j=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(j,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"bg-white text-black",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{to:"/",class:"text-decoration-none text-black"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.appName),1)])),_:1})])),_:1}),(0,l.Wm)(p,{flat:"",dense:"",round:"",icon:e.fasBars,"aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["icon","onClick"])])),_:1})])),_:1}),(0,l.Wm)(v,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),side:"right",behavior:"mobile"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{header:""},{default:(0,l.w5)((()=>[(0,l._)("div",s,[o,(0,l._)("div",i,[(0,l.Wm)(p,{icon:e.fasXmark,flat:"",round:"",color:"faded",onClick:t[0]||(t[0]=t=>e.leftDrawerOpen=!1)},null,8,["icon"])])])])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.Links,(e=>((0,l.wg)(),(0,l.j4)(g,(0,l.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(v,{modelValue:e.jobAdder,"onUpdate:modelValue":t[2]||(t[2]=t=>e.jobAdder=t),side:"right",behavior:"mobile","no-swipe-open":"","no-swipe-close":"","no-swipe-backdrop":""},{default:(0,l.w5)((()=>[e.jobAdder?((0,l.wg)(),(0,l.j4)(_,{key:0})):(0,l.kq)("",!0)])),_:1},8,["modelValue"]),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z)])),_:1})])),_:1})}var u=a(499);function d(e,t,a,s,o,i){const r=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),d=(0,l.up)("q-item-label"),c=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(c,{clickable:"",tag:e.tag,target:e.target,href:e.href,to:e.to,exact:""},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(u,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.label),1)])),_:1}),(0,l.Wm)(d,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["tag","target","href","to"])}const c=(0,l.aZ)({name:"EssentialLink",props:{label:{type:String,required:!0},caption:{type:String,default:""},icon:String,to:String,href:String,target:String,tag:String}});var m=a(1639),p=a(490),b=a(1233),h=a(2857),f=a(3115),g=a(9984),w=a.n(g);const v=(0,m.Z)(c,[["render",d]]),_=v;w()(c,"components",{QItem:p.Z,QItemSection:b.Z,QIcon:h.Z,QItemLabel:f.Z});var Z=a(353);const N=[{label:"Home",caption:"Main page",icon:Z.uuv,to:"/"},{label:"Jobs",caption:"The list of your jobs",icon:Z.xvj,to:"/admin/jobs"},{label:"Github",caption:"Github page of the project",icon:Z.fIt,tag:"a",target:"_blank",href:"https://github.com/pikil/f-example-app"}];var j=a(8910),k=a(8007);const q={class:"row q-col-gutter-x-md items-center"},x={class:"col-auto"},y=(0,l._)("div",{class:"col text-h5 text-faded"},"Create a new job",-1),S=(0,l._)("p",{class:"text-caption text-faded q-m"},"Client details",-1),V=(0,l._)("p",{class:"text-caption text-faded q-mt-sm"},"Job details",-1);function C(e,t,a,n,s,o){const i=(0,l.up)("q-btn"),r=(0,l.up)("q-card-section"),u=(0,l.up)("client-name"),d=(0,l.up)("client-phone"),c=(0,l.up)("client-email"),m=(0,l.up)("job-status-select"),p=(0,l.up)("q-form"),b=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(b,{flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",q,[(0,l._)("div",x,[(0,l.Wm)(i,{icon:e.fasArrowLeft,color:"faded",flat:"",round:"",onClick:e.dismiss},null,8,["icon","onClick"])]),y])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onSubmit:e.createJob},{default:(0,l.w5)((()=>[S,(0,l.Wm)(u,{modelValue:e.job.client.fName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.job.client.fName=t),autofocus:"",label:"First name",disable:e.creating},null,8,["modelValue","disable"]),(0,l.Wm)(u,{modelValue:e.job.client.lName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.job.client.lName=t),label:"Last name",disable:e.creating},null,8,["modelValue","disable"]),(0,l.Wm)(d,{modelValue:e.job.client.phone,"onUpdate:modelValue":t[2]||(t[2]=t=>e.job.client.phone=t),label:"Phone",disable:e.creating},null,8,["modelValue","disable"]),(0,l.Wm)(c,{modelValue:e.job.client.email,"onUpdate:modelValue":t[3]||(t[3]=t=>e.job.client.email=t),label:"Email",disable:e.creating},null,8,["modelValue","disable"]),V,(0,l.Wm)(m,{modelValue:e.job.status,"onUpdate:modelValue":t[4]||(t[4]=t=>e.job.status=t),class:"q-mt-sm",disable:e.creating},null,8,["modelValue","disable"]),(0,l.Wm)(i,{label:"Create job",type:"submit",class:"q-mt-xl full-width",color:"primary",disable:e.creating,loading:e.creating},null,8,["disable","loading"])])),_:1},8,["onSubmit"])])),_:1})])),_:1})}function W(e,t,a,n,s,o){const i=(0,l.up)("form-input");return(0,l.wg)(),(0,l.j4)(i,{rules:e.nameRules,"lazy-rules":"",label:e.label},null,8,["rules","label"])}function A(e,t){const a=(0,l.up)("q-input");return(0,l.wg)(),(0,l.j4)(a,{outlined:"",dense:"","no-error-icon":""})}var D=a(6611);const I={},L=(0,m.Z)(I,[["render",A]]),Q=L;w()(I,"components",{QInput:D.Z});const J=2,F=50,U=(0,l.aZ)({components:{FormInput:Q},props:{label:String},setup(e){return{nameRules:[t=>"string"===typeof t&&t.length>=J||e.label+" must be at least "+J+" characters",t=>t.length<=F||e.label+" must be less than "+F+" characters"]}}}),z=(0,m.Z)(U,[["render",W]]),H=z;function P(e,t,a,n,s,o){const i=(0,l.up)("form-input");return(0,l.wg)(),(0,l.j4)(i,{rules:e.phoneRules,"lazy-rules":""},null,8,["rules"])}const E=6,B=(0,l.aZ)({components:{FormInput:Q},setup(){return{phoneRules:[e=>"string"===typeof e&&e.length>=E||"Phone number must be at least "+E+" characters",e=>/^[0-9+]+$/.test(e)||"Phone number must contain only digits and +"]}}}),T=(0,m.Z)(B,[["render",P]]),Y=T;function R(e,t,a,n,s,o){const i=(0,l.up)("form-input");return(0,l.wg)(),(0,l.j4)(i,{rules:e.emailRules,"lazy-rules":""},null,8,["rules"])}const G=6,M=(0,l.aZ)({components:{FormInput:Q},setup(){return{emailRules:[e=>"string"===typeof e&&e.length>=G||"Email must be at least "+G+" characters",e=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)||"Email must be valid"]}}}),O=(0,m.Z)(M,[["render",R]]),X=O;var $=a(2796),K=a(5907),ee=a(3686),te=a(4328);const ae=(e,t,a,l)=>{te.Z.create({message:e,timeout:2500,type:t,color:t,icon:a,position:"string"===typeof l?l:"top-right"})},le=(e,t)=>{ae(e,"positive",ee.ITG,t)},ne=(0,l.aZ)({components:{ClientName:H,ClientPhone:Y,ClientEmail:X,JobStatusSelect:K.Z},setup(){const e=(0,u.iH)(!1),t=(0,u.iH)(new $.Z),a=(0,k.m)(),l=()=>{t.value.clear()};return{fasArrowLeft:Z.YvS,job:t,creating:e,createJob:()=>{e.value=!0,setTimeout((()=>{t.value.save().then((t=>{e.value=!1,a.setJobAdder(!1),l(),le("Job #"+t+" is created"),a.setLastNewJobId(t)})).catch((()=>{e.value=!1}))}),1e3)},dismiss:()=>{a.setJobAdder(!1),l()}}}});var se=a(4458),oe=a(3190),ie=a(9379),re=a(8326);const ue=(0,m.Z)(ne,[["render",C]]),de=ue;w()(ne,"components",{QCard:se.Z,QCardSection:oe.Z,QBtn:ie.Z,QForm:re.Z});const ce=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:_,NewJobAdder:de},setup(){const e=(0,u.iH)(!1),t=(0,j.yj)(),a=(0,l.Fl)((()=>t.path)),n=(0,k.m)();return(0,l.YP)(a,(()=>{e.value=!1})),{fasBars:Z.N2G,fasXmark:Z.Sf8,Links:N,appName:"Example app for tradies (frontend)",jobAdder:(0,l.Fl)({get:()=>n.jobAdderDialog,set:e=>{n.setJobAdder(e)}}),leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var me=a(7605),pe=a(6602),be=a(1663),he=a(1973),fe=a(3655),ge=a(3246),we=a(2133);const ve=(0,m.Z)(ce,[["render",r]]),_e=ve;w()(ce,"components",{QLayout:me.Z,QHeader:pe.Z,QToolbar:be.Z,QToolbarTitle:he.Z,QBtn:ie.Z,QDrawer:fe.Z,QList:ge.Z,QItemLabel:f.Z,QPageContainer:we.Z})}}]);