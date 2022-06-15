"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74],{2074:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});const o={name:"NoteItem",data:function(){return{colors:["bg-sky-200","bg-emerald-200","bg-green-200","bg-pink-200","bg-orange-200","bg-indigo-200"]}},props:["note"],methods:{switchForm:function(){this.$emit("switchForm",this.note)},switchFullscreen:function(){this.$emit("switchFullscreen",this.note)},deleteItem:function(t){confirm("You really want to delete the note")&&this.$store.dispatch("DEL_NOTE",t)},getDate:function(t){var e=new Date(t);return e.toLocaleDateString(e)},getColor:function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t]}}};const l=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{staticClass:"relative flex w-60 h-48 bg-gray-200 text-gray-600 rounded-md p-2 gap-2 cursor-pointer transition-colors duration-300 hover:bg-yellow-100 hover:text-gray-900",class:t.getColor(),on:{click:function(e){return t.switchFullscreen()}}},[s("div",{staticClass:"m-4"},[s("h2",{staticClass:"text-lg font-bold"},[t._v(t._s(t.note.title))]),t._v(" "),s("p",{staticClass:"text-xs"},[t._v(t._s(t.note.text))]),t._v(" "),s("span",{staticClass:"text-xs absolute right-1 top-1"},[t._v(t._s(t.getDate(t.note.created_at)))])]),t._v(" "),s("span",{staticClass:"absolute left-2 bottom-2",attrs:{title:"Complete"}},[t.note.complete?s("svg",{staticClass:"h-36 w-36 text-gray-500 opacity-10",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd"}},[s("path",{attrs:{d:"M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"}})]):t._e()])]),t._v(" "),s("span",{staticClass:"absolute right-12 bottom-2 cursor-pointer",attrs:{title:"Edit Note"}},[s("svg",{staticClass:"h-7 w-7 hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd"},on:{click:function(e){return t.switchForm()}}},[s("path",{attrs:{d:"M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"}})])]),t._v(" "),s("span",{staticClass:"absolute right-2 bottom-2 cursor-pointer",attrs:{title:"Delete Note"}},[s("svg",{staticClass:"h-7 w-7 hover:text-red-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd"},on:{click:function(e){return t.deleteItem(t.note.id)}}},[s("path",{attrs:{d:"M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"}})])])])}),[],!1,null,null,null).exports}}]);