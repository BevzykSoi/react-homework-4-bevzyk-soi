"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{8674:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(5671),i=a(3144),r=a(136),n=a(5716),o=a(4569),c=a.n(o),l=a(2791),h=a(1523),d=a(2762),m={trendingTitle:"HomePage_trendingTitle__1AaoZ",movieList:"HomePage_movieList__ECohD",poster:"HomePage_poster__+X7mT",hoverDesc:"HomePage_hoverDesc__IDRlw"},u=a(3668),g=a(184);c().defaults.baseURL="https://api.themoviedb.org/3";var p=function(e){(0,r.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],loading:!0},e}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){c().get("/trending/movie/day?api_key=".concat("170b9b9397b0574b7d603cba918ea1f4")).then((function(t){return e.setState({movies:t.data.results,loading:!1})})).catch((function(e){return console.error(e)}))}),500)}},{key:"render",value:function(){var e=this,t=this.state.loading;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:m.trendingTitle,children:"Trending today:"}),t&&(0,g.jsx)(d.gy,{heigth:"100",width:"100",color:"#ce0b0b",ariaLabel:"loading",wrapperClass:"loader"}),this.state.movies.length>0&&(0,g.jsx)("ul",{className:m.movieList,children:this.state.movies.map((function(t){var a=t.title,s=t.id,i=t.poster_path,r=t.vote_average,n=t.release_date;return i=i?"https://image.tmdb.org/t/p/original".concat(i):u,(0,g.jsx)("li",{children:(0,g.jsxs)(h.rU,{to:{pathname:"/movies/".concat(s),state:{from:e.props.location}},children:[(0,g.jsx)("div",{className:m.visibleDesc,children:(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(i),alt:"",className:m.poster})}),(0,g.jsxs)("div",{className:m.hoverDesc,children:[(0,g.jsx)("h3",{children:(0,g.jsx)("b",{children:a})}),(0,g.jsx)("br",{}),(0,g.jsxs)("h3",{children:["Rating: ",(0,g.jsx)("b",{children:r})]}),(0,g.jsx)("br",{}),(0,g.jsxs)("h3",{children:["Release date: ",(0,g.jsx)("b",{children:n})]})]})]})},s)}))})]})}}]),a}(l.Component)},3668:function(e,t,a){e.exports=a.p+"static/media/defaultMovie.1212ea4ab9c9db0d8f42.jpg"}}]);
//# sourceMappingURL=674.7f9e1f3c.chunk.js.map