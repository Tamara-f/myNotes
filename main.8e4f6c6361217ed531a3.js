(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9nXs":function(e){e.exports=JSON.parse('[{"id":"1","name":"first task","created":"10/06/2012","category":"task","content":"bla bla one twoo bla","dates":" "},{"id":"2","name":"second task","created":"09/06/2012","category":"task","content":"22/06/2021 bla bla one twoo bla","dates":"22/06/2021"},{"id":"3","name":"cleaning","created":"09/06/2012","category":"idea","content":"start cleaning service","dates":" "},{"id":"4","name":"party and food menu","created":"09/06/2012","category":"Random Though","content":"Cheese and Garlic Crack Bread 12-06-2012","dates":"12-06-2012"},{"id":"5","name":"shopping","created":"10/06/2012","category":"Random Though","content":"Shop high-quality unique Cool T-Shirts designed and sold by artists","dates":" "}]')},L1EO:function(e,t,n){},M3vZ:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,i=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='addNote modal'>\r\n  <form>\r\n    <label>Name:</label>\r\n    <input\r\n      class='inputModal'\r\n      type='text'\r\n      placeholder='"+i("function"==typeof(r=null!=(r=d(n,"name")||(null!=t?d(t,"name"):t))?r:c)?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:7,column:19},end:{line:7,column:27}}}):r)+"'\r\n      value='"+i("function"==typeof(r=null!=(r=d(n,"name")||(null!=t?d(t,"name"):t))?r:c)?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:8,column:13},end:{line:8,column:21}}}):r)+"'\r\n    />\r\n    <div class='radio'>Choose category:\r\n      <label><input\r\n          type='radio'\r\n          name='radio'\r\n          value='Task'\r\n          checked\r\n        />Task</label>\r\n      <label><input type='radio' name='radio' value='Random Though' />Random\r\n        Though</label>\r\n      <label><input type='radio' name='radio' value='Idea' />Idea</label>\r\n    </div>\r\n    <label for='content'>Content:</label>\r\n    <textarea\r\n      id='content'\r\n      name='content'\r\n      rows='5'\r\n      cols='33'\r\n    >"+i("function"==typeof(r=null!=(r=d(n,"content")||(null!=t?d(t,"content"):t))?r:c)?r.call(l,{name:"content",hash:{},data:o,loc:{start:{line:27,column:5},end:{line:27,column:16}}}):r)+"</textarea>\r\n    <a class='close'> <button type='submit'>Save</button></a>\r\n  </form></div>"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO");var a=n("dcBu"),o=(n("uDJT"),n("Y9Fi")),r=n.n(o),l=(n("lYjL"),n("8cZI"),n("Muwe"),n("aZFp"),n("bGYK"));var c=document.querySelector(".archived-notes"),i=document.querySelector(".statsActive"),d=document.querySelector(".statsArchive");function u(){var e=document.querySelectorAll(".note-item").length,t=c.childNodes.length;console.log("update",t),i.textContent=""+(e-t),d.textContent=""+t}var s=document.querySelector("ul.notes");function p(e){e.preventDefault();var t=function(e){var t,n,a,o=document.querySelector('input[name="radio"]:checked').value,r=e.target[0].value,c=e.target[4].value,i=(t=c.split(",").join(" ").split(" "),n=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,(a=t.filter((function(e){return n.test(e)})))?a.join(", "):"");return{id:Object(l.a)(),name:r,created:(new Date).toLocaleDateString(),category:o,content:c,dates:i}}(e),n=r()([t]);s.insertAdjacentHTML("afterbegin",n),u(),window.scrollTo({top:0,behavior:"smooth"})}var m=n("M3vZ"),h=n.n(m);document.querySelector(".modalBtn").onclick=function(){a.create(h()(),{onShow:function(e){e.element().querySelector(".close").onclick=e.close}}).show(),document.querySelector(".modal").addEventListener("submit",p)};n("njOe");var f=n("9nXs"),v=n("5var"),y=n.n(v);n("JBxO"),n("FdtR"),n("wcNg");function b(e,t,n,a,o,r,l){try{var c=e[r](l),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(a,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function l(e){b(r,a,o,l,c,"next",e)}function c(e){b(r,a,o,l,c,"throw",e)}l(void 0)}))}}var N=document.querySelector(".archived-notes");function w(){return(w=g(regeneratorRuntime.mark((function e(t){var n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=function(e){if("archive"===e.target.dataset.title){var t=e.target.parentNode.parentNode.parentNode;e.target.parentNode.parentNode.childNodes[1].removeAttribute("hidden",""),e.target.parentNode.parentNode.childNodes[5].removeAttribute("hidden",""),a.appendChild(t),u(),window.scrollTo({top:500,behavior:"smooth"})}},n=t.target.parentNode.parentNode.parentNode,t.target.parentNode.parentNode.childNodes[1].setAttribute("hidden",""),t.target.parentNode.parentNode.childNodes[5].setAttribute("hidden",""),a=n.parentNode,N.appendChild(n),N.addEventListener("click",o),u();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=document.querySelector("ul.notes");var S=function(e){var t=r()(e);k.insertAdjacentHTML("afterbegin",t),k.addEventListener("click",(function(e){switch(e.target.dataset.title){case"edit":!function(e){var t=e.target.parentNode.parentNode.parentNode,n=t.children[0].textContent,o=t.children[3].textContent,r=t.parentNode,l={name:n,content:o},c=h()(l);a.create(c,{onShow:function(e){e.element().querySelector(".close").onclick=e.close}}).show(),r.removeChild(t),document.querySelector(".modal").addEventListener("submit",p)}(e);break;case"archive":!function(e){w.apply(this,arguments)}(e);break;case"delete":!function(e){y()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this note",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){if(t){y()("Your note has been deleted!",{icon:"success"});var n=e.target.parentNode.parentNode.parentNode;n.parentNode.removeChild(n),u()}else y()("Your note is safe!")}))}(e)}}))},x=document.querySelector(".statsActive");document.addEventListener("DOMContentLoaded",(function(){S(f);var e=document.querySelectorAll(".note-item");x.textContent=""+e.length}))},Y9Fi:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,i="function",d=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li id="+d(typeof(r=null!=(r=u(n,"id")||(null!=t?u(t,"id"):t))?r:c)===i?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:2,column:9},end:{line:2,column:15}}}):r)+" class='note-item'>\r\n    <p class='note-text'>"+d(typeof(r=null!=(r=u(n,"name")||(null!=t?u(t,"name"):t))?r:c)===i?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:3,column:25},end:{line:3,column:33}}}):r)+"</p>\r\n    <p>"+d(typeof(r=null!=(r=u(n,"created")||(null!=t?u(t,"created"):t))?r:c)===i?r.call(l,{name:"created",hash:{},data:o,loc:{start:{line:4,column:7},end:{line:4,column:18}}}):r)+"</p>\r\n    <p>"+d(typeof(r=null!=(r=u(n,"category")||(null!=t?u(t,"category"):t))?r:c)===i?r.call(l,{name:"category",hash:{},data:o,loc:{start:{line:5,column:7},end:{line:5,column:19}}}):r)+"</p>\r\n    <p>"+d(typeof(r=null!=(r=u(n,"content")||(null!=t?u(t,"content"):t))?r:c)===i?r.call(l,{name:"content",hash:{},data:o,loc:{start:{line:6,column:7},end:{line:6,column:18}}}):r)+"</p>\r\n    <p>"+d(typeof(r=null!=(r=u(n,"dates")||(null!=t?u(t,"dates"):t))?r:c)===i?r.call(l,{name:"dates",hash:{},data:o,loc:{start:{line:7,column:7},end:{line:7,column:16}}}):r)+"</p>\r\n    <p>\r\n      <span class='note-edit'><i\r\n          class='fas fa-edit'\r\n          data-title='edit'\r\n        ></i></span>\r\n      <span class='note-archive'><i\r\n          class='fas fa-archive'\r\n          data-title='archive'\r\n        ></i></span>\r\n      <span class='note-trash'><i\r\n          class='fas fa-trash-alt'\r\n          data-title='delete'\r\n        ></i></span>\r\n    </p>\r\n  </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?r:""},useData:!0})},njOe:function(e,t){var n=document.querySelector(".seeArch"),a=document.querySelector(".myArchNotes");n.onclick=function(){a.hasAttribute("hidden")?a.removeAttribute("hidden"):a.setAttribute("hidden",""),window.scrollTo({top:1500,behavior:"smooth"})}}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.8e4f6c6361217ed531a3.js.map