package;

import react.ReactComponent;
import react.ReactMacro.jsx;


/**
 * ...
 * @author Tamas Hortobagyi
 */
class SocialCard extends ReactComponentOfProps<SocialCardProps>
{
	override public function render():ReactElement
	{
		var data:SocialData = this.props.data;
		
		var bgStyle = {
			backgroundImage: 'url(\'${data.bg}\')'
		}
		
		var imgStyle = {
			backgroundImage: 'url(\'${data.image}\')'
		}
		
		return jsx('
			<div className="socailCard autoCenter">
				<div className="socialBG" style=$bgStyle>
				</div>
				<div className="socialImage" style=$imgStyle></div>
				<p className="socialName">${data.name}</p>
				<p className="socialDesc">${data.info}</p>
				
				<div className="socialInfo">
					${renderSocialInfo("Left", data.followers, "Follower" + (data.followers > 1 ? "s" : ""))}
					${renderSocialInfo("Right", data.follow, "Following")}
					<div className="socialInfoDivider"></div>
				</div>
				<div className="socialFooter">${data.followed ? 'Followed' : 'Follow'}</div>
				<div className="socialContact">
					<div className="socialIconLine">
						<div className="socialIcon icon-location"></div><div>${data.country}</div>
						<div style=${ {width: "3em"} }></div>
						<div className="socialIcon icon-mail"></div><div>Send E-mail</div>
					</div>
				</div>
			</div>
		');
	}
	
	function renderSocialInfo(classSuffix:String, number:Int, text:String):ReactElement
	{
		var className = 'socialInfo' + classSuffix;
		return jsx('
			<div className=${className}>
				<div>
					<b>${formatNumber(number)}</b><br/><span>${text}</span>
				</div>
			</div>
		');
	}
	
	function formatNumber(n:Int):String
	{
		var s:String = '$n';
		var i = s.length - 3;
		
		while (i > 0)
		{
			s = s.substr(0, i) + ',' + s.substr(i);
			i -= 3;
		}
		
		return s;
	}
}

typedef SocialCardProps = {
	var data:SocialData;
}

typedef SocialData = {
	var name:String;
	var info:String;
	var image:String;
	var bg:String;
	var followers:Int;
	var follow:Int;
	var country:String;
	var email:String;
	var followed:Bool;
}