import{o as c,c as g,a as u,d as x,r as h,b as y,e,w as i,v as d,f as w,u as v,g as m,A as l,h as b}from"./index.675b0fd9.js";import{_}from"./logo.6b4de43f.js";import{s as k}from"./request.51dc9a76.js";function V(p,a){return c(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[u("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])}const B={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},C={class:"max-w-md w-full space-y-8"},j=e("div",null,[e("img",{class:"mx-auto h-12 w-auto",src:_,alt:"Workflow"}),e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Sign in to your account"),e("p",{class:"mt-2 text-center text-sm text-gray-600"},[m(" Or "),e("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500"}," start your 14-day free trial ")])],-1),z={class:"mt-8 space-y-6",action:"#",method:"POST"},F=e("input",{type:"hidden",name:"remember",value:"true"},null,-1),P={class:"rounded-md shadow-sm -space-y-px"},E=e("label",{for:"email-address",class:"sr-only"},"Email address",-1),K=e("label",{for:"password",class:"sr-only"},"Password",-1),N=["onKeyup"],S=e("div",{class:"flex items-center"},[e("input",{id:"remember-me",name:"remember-me",type:"checkbox",class:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),e("label",{for:"remember-me",class:"ml-2 block text-sm text-gray-900"}," Remember me ")],-1),T={class:"absolute left-0 inset-y-0 flex items-center pl-3"},O=x({__name:"Login",setup(p){const a=b(),t=h({username:"114514@qq.com",password:"114514"});function n(){k({method:"post",url:"/login",data:{username:t.username,password:t.password}}).then(s=>{s.code==="200"&&(l({type:"success",title:s.msg}),a.push("/userPage"))})}function f(){l({type:"warn",title:"\u656C\u8BF7\u671F\u5F85"})}return(s,o)=>(c(),y("div",B,[e("div",C,[j,e("form",z,[F,e("div",P,[e("div",null,[E,i(e("input",{id:"email-address",name:"email",type:"email",autocomplete:"email",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address","onUpdate:modelValue":o[0]||(o[0]=r=>t.username=r)},null,512),[[d,t.username]])]),e("div",null,[K,i(e("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=r=>t.password=r),onKeyup:w(n,["enter"])},null,40,N),[[d,t.password]])])]),e("div",{class:"flex items-center justify-between"},[S,e("div",{class:"text-sm"},[e("a",{href:"javacript:;",class:"font-medium text-indigo-600 hover:text-indigo-500",onClick:f}," Forgot your password? ")])]),e("div",null,[e("button",{type:"button",onClick:n,class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[e("span",T,[u(v(V),{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})]),m(" Sign in ")])])])])]))}});export{O as default};
