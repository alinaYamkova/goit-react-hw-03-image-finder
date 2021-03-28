(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Button:"Button_Button__1Ba4u"}},17:function(e,t,a){},3:function(e,t,a){e.exports={App:"Searchbar_App___fcbD",Searchbar:"Searchbar_Searchbar__u8Gfd",SearchForm:"Searchbar_SearchForm__1Coyf","SearchForm-button":"Searchbar_SearchForm-button__1EpWM","SearchForm-button-label":"Searchbar_SearchForm-button-label__DdpCK",SearchFormInput:"Searchbar_SearchFormInput__1IUn7",ImageGallery:"Searchbar_ImageGallery__yOB_d",ImageGalleryItem:"Searchbar_ImageGalleryItem__2Y8b8",ImageGalleryItemImage:"Searchbar_ImageGalleryItemImage__3puql",Overlay:"Searchbar_Overlay__1MMI8",Modal:"Searchbar_Modal__1s4FI",Button:"Searchbar_Button__E-F7D"}},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),o=a.n(c),l=(a(17),a(10)),s=a(4),i=a(5),h=a(7),u=a(6);var m={getFetch:function(e,t){var a="".concat("https://pixabay.com/api/","&?q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12&key=").concat("20840162-f62ff7402b91de28f502cc31c");return fetch(a).then((function(e){return e.json()})).then((function(e){return e.hits}))}},g=a(3),d=a.n(g),b=a(1),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.changeQuery({query:a}),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(b.jsx)("header",{className:d.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(b.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:e,onChange:this.handleChange})]})})}}]),a}(r.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedImg:e.props.largeImageURL},e.handleChange=function(){e.props.onClick(e.state.largeImageURL)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.tags,r=e.id;return Object(b.jsx)("li",{onClick:this.handleChange,children:Object(b.jsx)("img",{src:t,alt:a,className:d.a.ImageGalleryItemImage},r)})}}]),a}(r.Component),y=function(e){var t=e.hits,a=e.getElem;return Object(b.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.tags,n=e.webformatURL,c=e.largeImageURL;return Object(b.jsx)(f,{alt:r,src:n,selectedImg:c,getElem:a},t)}))})},j=a(11),O=a.n(j),S=function(e){var t=e.fetchImg;return Object(b.jsx)("button",{type:"button",className:O.a.Button,onClick:t,children:"Load more"})},v=document.querySelector("#modal-root"),_=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTurget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(b.jsx)("div",{className:d.a.Overlay,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:d.a.Modal,children:this.props.children})}),v)}}]),a}(r.Component),I=a(12),w=a.n(I),x=(a(39),a(40),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={hits:[],searchQuery:"moon",currentPage:1,isLoading:!1,showModal:!1,resultLength:null,selectedImg:"",error:null,msg:null},e.fetchImg=function(){e.setState({isLoading:!0});var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};m.getFetch(a).then((function(t){t.length?(e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(t)),resultLength:t.length,currentPage:e.currentPage+1}})),e.scrollWindow()):(e.setState({msg:"Please write a correct search"}),alert(e.state.msg))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.scrollWindow=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.changeQuery=function(t){console.log(t),e.state.searchQuery!==t&&(e.setState({searchQuery:t,currentPage:1,total:0,hits:[],isLoading:!0}),console.log(e.state.searchQuery))},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getElem=function(t){e.setState({selectedImg:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){console.log("\u044f \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0441\u044f!"),e.searchQuery!==this.state.searchQuery&&(this.fetchImg(),console.log(this.state.searchQuery))}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.isLoading,r=e.hits,n=e.resultLength,c=e.selectedImg,o=(e.toNextPage,this.toggleModal),l=this.getElem,s=this.changeQuery,i=this.fetchImg,h=12===n&&!a;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{changeQuery:s}),Object(b.jsx)(y,{hits:r,getElem:l}),h&&Object(b.jsx)(S,{onFetchImg:i}),t&&Object(b.jsx)(_,{onClose:o,children:Object(b.jsx)("img",{src:c,width:"600",height:"400"})}),a&&Object(b.jsx)(w.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80,timeout:2500})]})}}]),a}(r.Component));o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.13659ba0.chunk.js.map