(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={themeSelector:"SwitchTheme_themeSelector__1B8O8",label:"SwitchTheme_label__WC0od",switch:"SwitchTheme_switch__2BQnD",slider:"SwitchTheme_slider__in4ol"}},16:function(e,t,n){e.exports={title:"App_title__1YcTA",section:"App_section__1zThd"}},24:function(e,t,n){e.exports={contactItem:"ContactListItem_contactItem__3Q33w"}},25:function(e,t,n){e.exports={contactButton:"ContactListButton_contactButton__1hXYk"}},26:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH"}},27:function(e,t,n){e.exports={body:"Layout_body__2WDWT"}},29:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),r=n.n(o),l=n(2),u=n(14),i=n(22),m=n(3),s={addContact:Object(m.b)("contacts/add",(function(e,t){return{payload:{contact:{id:Object(u.uuid)(),name:e,phone:t}}}})),removeContact:Object(m.b)("contacts/remove"),changeFilter:Object(m.b)("task/changeFilter")},h=n(24),f=n.n(h),b=n(25),p=n.n(b);function d(e){var t=e.onRemoveContact;return c.a.createElement("button",{className:p.a.contactButton,type:"button",onClick:t},"Delete")}function g(e){var t=e.name,n=e.phone,a=e.keys,o=e.onRemove;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:f.a.contactItem,key:a},c.a.createElement("p",null,t," : ",n)),c.a.createElement(d,{onRemoveContact:o}))}g.defaultProps={name:"",phone:"",keys:""};var v=Object(l.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(i.a)({},n)}),(function(e,t){return{onRemove:function(){return e(s.removeContact(t.id))}}}))(g);function C(e){var t=e.contacts;return c.a.createElement("ul",null,t.map((function(e){var t=e.id;return c.a.createElement(v,{key:Object(u.uuid)(),id:t})})))}C.defaultProps={contacts:[]};var E=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter.toLowerCase();return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a)}))}}))(C),_=n(4),O=n(6),j=n(7),y=n(9),k=n(8),w=n(10),N=n(5),T=n.n(N),F=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",phone:""},n.handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(_.a)({},a,c))},n.hanleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,c=t.phone;n.props.onAddContact(a,c),n.setState({name:"",phone:""})},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone;return c.a.createElement("form",{className:T.a.form,onSubmit:this.hanleSubmit},c.a.createElement("label",{className:T.a.formLabel},"Name",c.a.createElement("input",{className:T.a.formInput,type:"text",value:t,placeholder:"Enter name",onChange:this.handleChange,name:"name",required:!0})),c.a.createElement("label",{className:T.a.formLabel},"Phone",c.a.createElement("input",{className:T.a.formInput,type:"text",value:n,placeholder:"Enter phone",onChange:this.handleChange,name:"phone",required:!0})),c.a.createElement("button",{className:T.a.formButton,type:"submit"},"Add contact"))}}]),t}(a.Component);F.defaultProps={onAddContact:function(){}};var x={onAddContact:s.addContact},B=Object(l.b)(null,x)(F),S=n(26),A=n.n(S);function I(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{className:A.a.filter,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))}I.defaultProps={value:""};var L={onChangeFilter:s.changeFilter},P=Object(l.b)((function(e){return{value:e.contacts.filter}}),L)(I),D={light:{fontColor:"black",bodyBg:"white"},dark:{fontColor:"white",bodyBg:"black"}},R=c.a.createContext(D),W=n(11),q=n.n(W),J=function(e){var t=e.onToggleTheme;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:q.a.label},"Theme"),c.a.createElement("label",{className:q.a.switch},c.a.createElement("input",{type:"checkbox",checked:q.a.checked,onChange:function(e){return t(e.target.value)}}),c.a.createElement("span",{className:q.a.slider})))},Q=n(15),Y=function(e){return function(t){function n(){var e;return Object(O.a)(this,n),(e=Object(y.a)(this,Object(k.a)(n).call(this))).state={theme:"light"},e.toggleTheme=e.toggleTheme.bind(Object(Q.a)(e)),e}return Object(w.a)(n,t),Object(j.a)(n,[{key:"toggleTheme",value:function(e){this.setState({theme:"dark"===this.state.theme?"light":"dark"})}},{key:"render",value:function(){var t=this;return c.a.createElement(R.Provider,{value:D[this.state.theme]},c.a.createElement(e,Object.assign({},this.props,{toggle:function(e){return t.toggleTheme(e)}})))}}]),n}(a.Component)},z=n(27),H=n.n(z),M=Y(function(e){function t(){return Object(O.a)(this,t),Object(y.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(R.Consumer,null,(function(t){return c.a.createElement("div",{className:H.a.body,style:{color:t.fontColor,background:t.bodyBg}},e.props.toggle&&c.a.createElement(J,{onToggleTheme:function(t){return e.props.toggle(t)}}),e.props.children)})))}}]),t}(a.Component)),X=n(16),G=n.n(X);var K,U=n(28),V=n(1),Z=Object(m.c)([],(K={},Object(_.a)(K,s.addContact,(function(e,t){return[].concat(Object(U.a)(e),[t.payload.contact])})),Object(_.a)(K,s.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),K)),$=Object(m.c)("",Object(_.a)({},s.changeFilter,(function(e,t){return t.payload}))),ee=Object(V.combineReducers)({items:Z,filter:$}),te=Object(m.a)({reducer:{contacts:ee}});n(46);r.a.render(c.a.createElement(l.a,{store:te},c.a.createElement((function(){return c.a.createElement(M,null,c.a.createElement("section",{className:G.a.section},c.a.createElement("h1",{className:G.a.title},"Phonebook"),c.a.createElement(B,null),c.a.createElement("h2",{className:G.a.title},"Contacts"),c.a.createElement(P,null),c.a.createElement(E,null)))}),null)),document.getElementById("root"))},5:function(e,t,n){e.exports={formLabel:"ContactForm_formLabel__1hDC-",formInput:"ContactForm_formInput__1r2bF",formButton:"ContactForm_formButton__2M3aA"}}},[[29,1,2]]]);
//# sourceMappingURL=main.47874165.chunk.js.map