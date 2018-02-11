// Generated by Haxe 3.4.2 (git build master @ 890f8c7)
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
var Main = function() { };
Main.main = function() {
	Main.render();
};
Main.render = function() {
	var info = { name : "Terminator Model 101", info : "Travelled back in time to kill Sarah Connor but failed because of a young soldier", image : "assets/arni.jpg", bg : "assets/bg.jpg", followers : 12073, follow : 7840, country : "USA", email : "die.sarah@gmail.com", followed : false};
	ReactDOM.render({ "$$typeof" : $$tre, type : SocialCard, props : { data : info}},window.document.getElementById("app"));
};
var SocialCard = function(props,context) {
	React.Component.call(this,props,context);
};
SocialCard.__super__ = React.Component;
SocialCard.prototype = $extend(React.Component.prototype,{
	render: function() {
		var data = this.props.data;
		var bgStyle = { backgroundImage : "url('" + data.bg + "')"};
		var imgStyle = { backgroundImage : "url('" + data.image + "')"};
		var tmp = $$tre;
		var tmp1 = { "$$typeof" : $$tre, type : "div", props : { style : bgStyle, className : "socialBG"}};
		var tmp2 = { "$$typeof" : $$tre, type : "div", props : { style : imgStyle, className : "socialImage"}};
		var tmp3 = { "$$typeof" : $$tre, type : "p", props : { className : "socialName", children : data.name}};
		var tmp4 = { "$$typeof" : $$tre, type : "p", props : { className : "socialDesc", children : data.info}};
		var tmp5 = { "$$typeof" : $$tre, type : "div", props : { className : "socialInfo", children : [this.renderSocialInfo("Left",data.followers,"Follower" + (data.followers > 1 ? "s" : "")),this.renderSocialInfo("Right",data.follow,"Following"),{ "$$typeof" : $$tre, type : "div", props : { className : "socialInfoDivider"}}]}};
		var tmp6 = data.followed ? "Followed" : "Follow";
		return { $$typeof : tmp, type : "div", props : { className : "socailCard autoCenter", children : [tmp1,tmp2,tmp3,tmp4,tmp5,{ "$$typeof" : $$tre, type : "div", props : { className : "socialFooter", children : tmp6}},{ "$$typeof" : $$tre, type : "div", props : { className : "socialContact", children : { "$$typeof" : $$tre, type : "div", props : { className : "socialIconLine", children : [{ "$$typeof" : $$tre, type : "div", props : { className : "socialIcon icon-location"}},{ "$$typeof" : $$tre, type : "div", props : { children : data.country}},{ "$$typeof" : $$tre, type : "div", props : { style : { width : "3em"}}},{ "$$typeof" : $$tre, type : "div", props : { className : "socialIcon icon-mail"}},{ "$$typeof" : $$tre, type : "div", props : { children : "Send E-mail"}}]}}}}]}};
	}
	,renderSocialInfo: function(classSuffix,number,text) {
		var className = "socialInfo" + classSuffix;
		return { "$$typeof" : $$tre, type : "div", props : { className : className, children : { "$$typeof" : $$tre, type : "div", props : { children : [{ "$$typeof" : $$tre, type : "b", props : { children : this.formatNumber(number)}},{ "$$typeof" : $$tre, type : "br", props : { }},{ "$$typeof" : $$tre, type : "span", props : { children : text}}]}}}};
	}
	,formatNumber: function(n) {
		var s = "" + n;
		var i = s.length - 3;
		while(i > 0) {
			s = HxOverrides.substr(s,0,i) + "," + HxOverrides.substr(s,i,null);
			i -= 3;
		}
		return s;
	}
});
var react_ReactMacro = function() { };
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
SocialCard.displayName = "SocialCard";
Main.main();
})();
