"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{8076:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var r=e(5671),c=e(3144),n=e(136),s=e(5716),i=e(4569),o=e.n(i),h=e(2791),l="Cast_castList__ARoWn",u="Cast_actorDesc__b65w-",p=e(7099),d=e(184),f=function(t){(0,n.Z)(e,t);var a=(0,s.Z)(e);function e(){var t;(0,r.Z)(this,e);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=a.call.apply(a,[this].concat(n))).state={cast:[]},t}return(0,c.Z)(e,[{key:"componentDidMount",value:function(){var t=this,a=this.props.match.params.movieId;o().get("/movie/".concat(a,"/credits?api_key=").concat("170b9b9397b0574b7d603cba918ea1f4")).then((function(a){return t.setState({cast:a.data.cast})})).catch((function(t){return console.error(t)}))}},{key:"render",value:function(){var t=this.state.cast;return(0,d.jsx)("ul",{className:l,children:t.map((function(t){var a=t.id,e=t.name,r=t.profile_path,c=t.character;return r=r?"https://image.tmdb.org/t/p/original".concat(r):p,(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:r,alt:e}),(0,d.jsxs)("div",{className:u,children:[(0,d.jsxs)("h3",{children:[(0,d.jsx)("b",{children:"Actor:"})," ",e]}),(0,d.jsxs)("h3",{children:[(0,d.jsx)("b",{children:"Character:"})," ",c]})]})]},a)}))})}}]),e}(h.Component)},7099:function(t,a,e){t.exports=e.p+"static/media/defaultCast.37e3a2c1f8b53971a165.jpg"}}]);
//# sourceMappingURL=76.c92e9e86.chunk.js.map