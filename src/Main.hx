package;

import react.ReactDOM;
import react.ReactMacro.jsx;

import SocialCard;

/**
 * ...
 * @author Tamas Hortobagyi
 */
class Main
{
	static function main()
	{
		render();
	}
	
	static function render()
	{
		var info:SocialData = {
			name: "Terminator Model 101",
			info: "Travelled back in time to kill Sarah Connor but failed because of a young soldier",
			image: "assets/arni.jpg",
			bg: "assets/bg.jpg",
			followers: 12073,
			follow: 7840,
			country: "USA",
			email: "die.sarah@gmail.com",
			followed: false
		}
		
		ReactDOM.render(jsx('
			<SocialCard data=$info />
		'), js.Browser.document.getElementById('app'));
	}
}