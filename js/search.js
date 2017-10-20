// EDITED FROM https://github.com/WillEccles/startpage/tree/0a83b3dd8cb0de95a1c4b6408c5b129e7db90dd7 for personal use.

var box = document.getElementById("searchBoxInput");

// this should catch most URLs, or at least the ones I would type.
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;
// regex for a hashtag taken straight from twitter's source code
var hashtag = "(#|＃)?([a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*[a-z_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f][a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*)";

// add on here with more handy things
var handy = /^(google|gmail|dropbox)$/i;

// search for text in text box
function search() {
	console.log("Googling \"" + box.value + "\"");
	console.log("Encoded query: \n" + encodeURIComponent(box.value));
	document.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(box.value);
}

// if not search, nav to somewhere
function nav(address) {
	// if the address starts with "https?|ftp ://"
	if (/^(?:(?:https?|ftp):\/\/).*/i.test(address)) {
		document.location.href = address;
	} else {
		document.location.href = "http://" + address;
	}
}

// Handle enter key press in text box
// also handle the command parsing in the event that the text in the box is a command
function searchKeyPress(e) {
	e = e || window.event;
	if (e.keyCode == 13) {
		parseCom(box.value);
	}

	// first, handle known cases of preset commands
}

// when you hover a link, show its href
function aTitle(e) {
	e.title = e.href;
}

// focus the search box on load
window.onload = function() {
	document.getElementById("searchBoxInput").focus();
};


// USER COMMANDS START HERE


// parse the user's command
function parseCom(com) {
	// handle help command
	if (/^h[ea]lp$/i.test(com) || /^commands$/i.test(com)) {
		document.location.href = "commands.txt";
	}



	// handle imgur command
	else if (/^imgur$/i.test(com)) {
		document.location.href = "http://www.imgur.com";
	}




	// handle reddit command
	else if (com.startsWith("red")==true) {
		// if any of the custom subreddit commands are matched
		if (/^red [A-Za-z0-9_.]{1,30}$/i.test(com)) {
			var subargs = com.split(" ");
			switch (subargs.pop()) {
				case "f":
					nav("https://www.reddit.com/r/funny");
					break;
				case "wg":
					nav("https://www.reddit.com/r/weekendgunnit");
					break;
				case "up":
					nav("https://www.reddit.com/r/unixporn");
					break;
				case "sp":
					nav("https://www.reddit.com/r/startpages");
					break;
				default:
					nav("https://www.reddit.com/");
					break;
			}
		}
		// if the subreddit command is matched
		else if (/^red r .*$/i.test(com)) {
			var sargs = com.split(" ");
			nav("https://www.reddit.com/r/" + sargs.pop());
		}
		// if the user command is matched
		else if (/^red u .*$/i.test(com)) {
			var uargs = com.split(" ");
			nav("https://www.reddit.com/u/" + uargs.pop());
		}
		// if the search command is matched
		else if (/^red s .*$/i.test(com)) {
			var searchargs = com.split(" ");
			nav("https://www.reddit.com/search?q=" + searchargs.pop());
		}
		// if the plain old reddit command is matched
		else if (/^red$/i.test(com)) {
			nav("https://www.reddit.com/");
		}
		// if anything else, it'll just google it because who cares
		else if (urlPattern.test(com)){
			nav(com);
		}
		// if all else fails, google it
		else {
			search();
		}
	}



	// handle twt command
	else if (com.startsWith("twt")==true) {
		// if matches the "twt" command
		if (/^twt$/i.test(com)) {
			nav("https://www.twitter.com/");
		}
		// if the twt [@]user_name command
		else if (/^twt @?[A-Za-z0-9_]{1,15}$/i.test(com)) {
			var targs = com.split(" ");
			nav("https://www.twitter.com/" + targs.pop());
		}
		// search twitter for text
		else if (/^twt s .{1,140}$/i.test(com)) {
			var query = com.replace(/^twt -s /i, "");
			nav("https://www.twitter.com/search?q=" + encodeURIComponent(query));
		}
		// search twitter for text from user
		else if (/^twt su @?[A-Za-z0-9_]{1,15} .{1,140}$/i.test(com)) {
			var qparts = com.split(" ");
			var query = com.replace(/^twt su @?[A-Za-z0-9_]{1,15} /i, "");

			nav("https://www.twitter.com/search?q=" + encodeURIComponent(query + " from:" + qparts[2]));
		}
		// search twitter for tweets with a hashtag
		else if (/^twt -sh " + hashtag + "$/i.test(com)) {
			var tag = com.replace(/^twt -sh #?/i, "");
			nav("https://www.twitter.com/search?q=" + encodeURIComponent("#" + tag));
		}
		// search twitter for hashtags from user
		else if (/^twt -sh @?[A-Za-z0-9_]{1,15} " + hashtag + "$/i.test(com)) {
			var comparts = com.split(" ");
			nav("https://www.twitter.com/search?q=" + encodeURIComponent(comparts[3] + " from:" + comparts[2]));
		}
		// if anything else, it'll just google it because who cares
		else if (urlPattern.test(com)){
			nav(com);
		}
		// if all else fails, google it
		else {
			search();
		}
	}





	// handle twd command
	else if (com.startsWith("twd")==true) {
		if (/^twd$/i.test(com)) {
			nav("https://tweetdeck.twitter.com/");
		}
		// if anything else, it'll just google it because who cares
		else if (urlPattern.test(com)){
			nav(com);
		}
		// if all else fails, google it
		else {
			search();
		}
	}
	// handle ig command
	else if (com.startsWith("ig")==true) {
		// just plain old ig
		if (/^ig$/i.test(com)) {
			nav("https://www.instagram.com/");
		}
		// ig [@]username command
		else if (/^ig @?[A-Za-z0-9_.]{1,30}/i.test(com)) {
			var iargs = com.split(" ");
			nav("https://www.instagram.com/" + iargs.pop());
		}
		// if anything else, it'll just google it because who cares
		else if (urlPattern.test(com)){
			nav(com);
		}
		// if all else fails, google it
		else {
			search();
		}
	}


	// handle youtube command
	else if (com.startsWith("yt")==true) {
		// if any of the custom subreddit commands are matched
		if (/^yt [A-Za-z0-9_.]{1,30}$/i.test(com)) {
			var subargs = com.split(" ");
			switch (subargs.pop()) {
				case "hf":
					nav("https://www.youtube.com/user/HaatFilms/videos");
					break;
				case "sp":
					nav("https://www.youtube.com/user/mlgHwnT/videos");
					break;
				case "rt":
					nav("https://www.youtube.com/playlist?list=PLUBVPK8x-XMjKAxGCwhQ2WxTvfqX8qRku");
					break;
				default:
					nav("https://www.youtube.com/");
					break;
			}
		}
		// if the plain old youtube command is matched
		else if (/^yt$/i.test(com)) {
			nav("https://www.youtube.com/");
		}
		// if anything else, it'll just google it because who cares
		else if (urlPattern.test(com)){
			nav(com);
		}
		// if all else fails, google it
		else {
			search();
		}
	}



	// misc commands
	else if (/^(gm|gmail|mail)$/i.test(com)) {
		nav("http://gmail.google.com");
	}
	else if (/^(gd|drive|gdrive)$/i.test(com)) {
		nav("http://drive.google.com");
	}
	else if (/^(st|speedtest)$/i.test(com) || /^spd$/i.test(com)) {
		nav("http://www.speedtest.net");
	}
	else if (/^(twitch|tw)$/i.test(com)) {
		nav("http://www.twitch.tv/following");
	}
	else if (/^(twitch|tw) [^ ]+$/i.test(com)) {
		var parts = com.split(" ");
		nav("http://www.twitch.tv/" + parts.pop());
	}
	else if (/^spotify$/i.test(com) || /^sptfy$/i.test(com)) {
		nav("https://play.spotify.com");
	}
	else if (/^(sc|soundcloud)$/i.test(com) || /^sc$/i.test(com)) {
		nav("https://soundcloud.com/stream");
	}
	else if (/^git(hub)?$/i.test(com)) {
		nav("https://github.com");
	}
	else if (/^(out|outlook)?$/i.test(com)) {
		nav("https://outlook.live.com/owa/");
	}
	else if (/^(t|tel|tele|telegram)?$/i.test(com)) {
		nav("https://web.telegram.org/");
	}
	else if (/^(wa|whatsapp)?$/i.test(com)) {
		nav("https://web.whatsapp.com");
	}
	else if (/^(nf|net|netflix)?$/i.test(com)) {
		nav("https://www.netflix.com");
	}
	else if (/^(pr|prime)?$/i.test(com)) {
		nav("https://www.amazon.co.uk/gp/video/watchlist/ref=sv_atv_7");
	}
	else if (/^(code|ca)?$/i.test(com)) {
		nav("https://www.codecademy.com/");
	}
	else if (/^(1password|1pass|1p)?$/i.test(com)) {
		nav("https://my.1password.com/signin");
	}
	else if (/^(onedrive|od)?$/i.test(com)) {
		nav("https://onedrive.live.com/");
	}
	else if (/^(dropbox|drop|db)?$/i.test(com)) {
		nav("https://www.dropbox.com/");
	}
	else if (/^(bbc|bbcnews)?$/i.test(com)) {
		nav("http://www.bbc.co.uk/news");
	}
	else if (/^(onenote|on|note|notes)?$/i.test(com)) {
		nav("https://onedrive.live.com/edit.aspx?resid=366EF82F32FBDB80!11905&cid=366ef82f32fbdb80&app=OneNote");
	}
	else if (/^(keep|k)?$/i.test(com)) {
		nav("https://keep.google.com/");
	}
	else if (/^(calendar|cal|gcal)?$/i.test(com)) {
		nav("https://calendar.google.com/");
	}
	else if (/^(sheets|sheet|sh)?$/i.test(com)) {
		nav("https://docs.google.com/spreadsheets/u/0/");
	}
	else if (/^(duckduckgo|duck|ddg|dd)?$/i.test(com)) {
		nav("https://start.duckduckgo.com/");
	}
	else if (/^(playmusic|play|music|m)?$/i.test(com)) {
		nav("https://play.google.com/music/listen?u=0#/albums");
	}
	else if (/^(amazon|ama)?$/i.test(com)) {
		nav("https://amazon.co.uk/");
	}
	else if (/^(ebay|eb)?$/i.test(com)) {
		nav("https://ebay.co.uk/");
	}
	else if (/^(humble|hum)?$/i.test(com)) {
		nav("https://humblebundle.com/");
	}
	else if (/^(steam|st)?$/i.test(com)) {
		nav("http://store.steampowered.com/");
	}



/*	else if (/^SHORTCUT?$/i.test(com)) {
		nav("URL");
	} */





	// Here are some really handy ones I'll probably have to use
	else if (handy.test(com)) {
		nav("http://www."+com+".com/");
	}
	else if (/^about:[A-Za-z0-9_-]+$/i.test(com)) {
		document.location.href = com;
	}
	// if it doesn't match any of the commands...
	// ... but is a valid URL
	else if (urlPattern.test(com)) {
		nav(com);
	}
	// ... or should be searched
	else {
		search();
	}
}
