'use strict';
function download(filename, encode, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:' + encode + ';charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
(function head(){
	let button = document.getElementById('head-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('head').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading Head.'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('head').children[1].childElementCount == 1) {
			document.getElementById('head').children[1].appendChild(fieldset);
			document.getElementById('head').children[1].children[1].appendChild(legend);
			var tag = ['charset','head-viewport',
			'head-csp','head-content','head-default','head-ie6', 'head-refresh','head-target','head-dns','head-iex',
			'head-title','head-desc','head-base','head-style1','head-style2','head-style3','head-script1','head-script2',
			'head-about','head-app','head-color','head-phone','head-geo','head-google','head-robots','head-ietile','head-monetize','head-pinterest','head-rating','head-refer',
			'head-og','head-twitter','head-dcmi',
			'head-amp','head-nav','head-canon','head-prefetch','head-edit','head-openid',
			'head-feed','head-favicon','head-credit','head-index','head-safe','head-license','head-p3p','head-search'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'charset') {
					code.appendChild(document.createTextNode('<meta charset="utf-8">'));
				} else if (el == 'head-viewport' && document.getElementById('head-viewport').checked === true) {
					code.appendChild(document.createTextNode('<meta name="viewport" content="width=device-width, initial-scale=1">'));
				} else if (el == 'head-csp' && document.getElementById('head-csp').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="Content-Security-Policy" content="default-src \'self\' *.domain.com">'));
				} else if (el == 'head-content' && document.getElementById('head-content').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="content-type" content="text/html; charset=UTF-8">'));
				} else if (el == 'head-default' && document.getElementById('head-default').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="default-style" content="style.css">'));
				} else if (el == 'head-ie6' && document.getElementById('head-ie6').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="imagetoolbar">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta http-equiv="msthemecompatible">'));
				} else if (el == 'head-refresh' && document.getElementById('head-refresh').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="refresh" content="5;url=https://website.com/">'));
				} else if (el == 'head-target' && document.getElementById('head-target').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="window-target" content="_parent" />'));
				} else if (el == 'head-dns' && document.getElementById('head-dns').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="x-dns-prefetch-control" content="off">'));
				} else if (el == 'head-iex' && document.getElementById('head-iex').checked === true) {
					code.appendChild(document.createTextNode('<meta http-equiv="x-ua-compatible" content="IE=edge">'));
				} else if (el == 'head-title') {
					code.appendChild(document.createTextNode('<title>' + document.getElementById('head-title').value + '</title>'));
				} else if (el == 'head-desc') {
					code.appendChild(document.createTextNode('<meta name="description" content="' + document.getElementById('head-desc').value + '">'));
				} else if (el == 'head-base' && document.getElementById('head-base').checked === true) {
					code.appendChild(document.createTextNode('<base href="https://website.com">'));
				} else if (el == 'head-style1' && document.getElementById('head-style1').checked === true) {
					code.appendChild(document.createTextNode('<style></style>'));
				} else if (el == 'head-style2' && document.getElementById('head-style2').checked === true) {
					code.appendChild(document.createTextNode('<link rel="stylesheet" href="assets/styles.css">'));
				} else if (el == 'head-style3' && document.getElementById('head-style3').checked === true) {
					code.appendChild(document.createTextNode('<link rel="alternate stylesheet" href="assets/theme.css" title=Theme">'));
				} else if (el == 'head-script1' && document.getElementById('head-script1').checked === true) {
					code.appendChild(document.createTextNode('<script async src="assets/script.js"></script>'));
				} else if (el == 'head-script2' && document.getElementById('head-script2').checked === true) {
					code.appendChild(document.createTextNode('<script></script>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<noscript></noscript>'));
				} else if (el == 'head-about' && document.getElementById('head-about').checked === true) {
					code.appendChild(document.createTextNode('<meta name="abstract" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="author" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="contact" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="copyright" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="creator" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="designer" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="generator" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="keywords" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="publisher" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="subject" content="">'));
				} else if (el == 'head-app' && document.getElementById('head-app').checked === true) {
					code.appendChild(document.createTextNode('<meta name="apple-mobile-web-app-capable" content="yes">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="apple-mobile-web-app-title" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="apple-mobile-web-app-status-bar-style" content="default">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="application-name" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="mobile-web-app-capable" content="yes">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="theme-color" content="#">'));
				} else if (el == 'head-color' && document.getElementById('head-color').checked === true) {
					code.appendChild(document.createTextNode('<meta name="color-scheme" content="dark light">'));
				} else if (el == 'head-phone' && document.getElementById('head-phone').checked === true) {
					code.appendChild(document.createTextNode('<meta name="format-detection" content="telephone=no">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">'));
				} else if (el == 'head-geo' && document.getElementById('head-geo').checked === true) {
					code.appendChild(document.createTextNode('<meta name="geo.placename" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="geo.position" content=";-">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="geo.region" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="ICBM" content=", -">'));
				} else if (el == 'head-google' && document.getElementById('head-google').checked === true) {
					code.appendChild(document.createTextNode('<meta name="google" content="nositelinkssearchbox">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="google" content="notranslate">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="google" content="nopagereadaloud">'));
				} else if (el == 'head-robots' && document.getElementById('head-robots').checked === true) {
					code.appendChild(document.createTextNode('<meta name="googlebot" content="noindex,nofollow">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="robots" content="noindex,nofollow">'));
				} else if (el == 'head-ietile' && document.getElementById('head-ietile').checked === true) {
					code.appendChild(document.createTextNode('<meta name="msapplication-config" content="browserconfig.xml">'));
				} else if (el == 'head-monetize' && document.getElementById('head-monetize').checked === true) {
					code.appendChild(document.createTextNode('<meta name="monetization" content="$wallet.website.com/name">'));
				} else if (el == 'head-pinterest' && document.getElementById('head-pinterest').checked === true) {
					code.appendChild(document.createTextNode('<meta name="pinterest" content="nopin">'));
				} else if (el == 'head-rating' && document.getElementById('head-rating').checked === true) {
					code.appendChild(document.createTextNode('<meta name="rating" content="adult">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="rating" content="RTA-5042-1996-1400-1577-RTA">'));
				} else if (el == 'head-refer' && document.getElementById('head-refer').checked === true) {
					code.appendChild(document.createTextNode('<meta name="referrer" content="no-referrer">'));
				} else if (el == 'head-og' && document.getElementById('head-og').checked === true) {
					code.appendChild(document.createTextNode('<meta property="og:description" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:image" content="image.png">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:image:alt" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:locale" content="en_us">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:title" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:type" content="website">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:url" content="https://website.com/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta property="og:video" content="video.mp4">'));
				} else if (el == 'head-twitter' && document.getElementById('head-twitter').checked === true) {
					code.appendChild(document.createTextNode('<meta name="twitter:card" content="summary">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:site" content="@">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:creator" content="@">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:description" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:title" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:image" content="image.png">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:image:alt" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="twitter:dnt" content="on">'));
				} else if (el == 'head-dcmi' && document.getElementById('head-dcmi').checked === true) {
					code.appendChild(document.createTextNode('<meta name="dc.contributor" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.coverage" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.creator" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.date" content="YYYY-MM-DD">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.description" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.format" content="text/html">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.identifier" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.language" content="en">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.publisher" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.relation" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.rights" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.source" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.subject" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.title" content="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="dc.type" content="">'));
				} else if (el == 'head-amp' && document.getElementById('head-amp').checked === true) {
					code.appendChild(document.createTextNode('<link rel="amphtml" href="https://website.com">'));
				} else if (el == 'head-nav' && document.getElementById('head-nav').checked === true) {
					code.appendChild(document.createTextNode('<link rel="archives" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="contents" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="first" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="glossary" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="home" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="index" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="last" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="me" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="next" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="prev" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="shortlink" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="up" href="https://website.com">'));
				} else if (el == 'head-canon' && document.getElementById('head-canon').checked === true) {
					code.appendChild(document.createTextNode('<link rel="canonical" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="self" href="https://website.com">'));
				} else if (el == 'head-prefetch' && document.getElementById('head-prefetch').checked === true) {
					code.appendChild(document.createTextNode('<link rel="dns-prefetch" href="//website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="modulepre-load" href="assets/script.js">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="preconnect" href="https://website.com/" crossorigin>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="prefetch" href="images/image.png">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="preload" as="font" type="font/woff2" crossorigin href="assets/font.woff2">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="prerender" href="https://website.com/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="subresource" href="assets/styles.css">'));
				} else if (el == 'head-edit' && document.getElementById('head-edit').checked === true) {
					code.appendChild(document.createTextNode('<link rel="edit" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="EditURI" type="application/rsd+xml" href="xmlrpc.php?rsd">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="micropub" href="https://website.com/micropub">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="pingback" href="xmlrpc.php">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="webmention" href="https://website.com/webmention">'));
				} else if (el == 'head-openid' && document.getElementById('head-openid').checked === true) {
					code.appendChild(document.createTextNode('<link rel="openid.delegate" href="https://website.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="openid.server" href="https://website.com">'));
				} else if (el == 'head-feed' && document.getElementById('head-feed').checked === true) {
					code.appendChild(document.createTextNode('<link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="alternate" type="application/json" title="Feed" href="feed.json">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="alternate" type="application/text+xml" title="opml" href="opml.xml">'));
				} else if (el == 'head-favicon' && document.getElementById('head-favicon').checked === true) {
					code.appendChild(document.createTextNode('<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="apple-touch-startup-image" href="apple-touch-image.png">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="icon" href="favicon.ico" sizes="32x32">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="icon" type="image/svg+xml" href="images/icon.svg">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="manifest" href="site.webmanifest">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="mask-icon" href="images/mask-icon.svg">'));
				} else if (el == 'head-credit' && document.getElementById('head-credit').checked === true) {
					code.appendChild(document.createTextNode('<link rel="author" type="text/plain" href="humans.txt">'));
				} else if (el == 'head-index' && document.getElementById('head-index').checked === true) {
					code.appendChild(document.createTextNode('<link rel="author" type="application/rdf+xml" href="dublin.rdf">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="author" type="application/rdf+xml" href="foaf.rdf">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="author" type="application/rdf+xml" href="geo.rdf">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="author" type="application/vnd.google-earth.kml+xml" href="geo.kml">'));
				} else if (el == 'head-safe' && document.getElementById('head-safe').checked === true) {
					code.appendChild(document.createTextNode('<link rel="help" type="application/rdf+xml" href="pics.rdf">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="help" type="application/powder+xml" href="powder.xml">'));
				} else if (el == 'head-license' && document.getElementById('head-license').checked === true) {
					code.appendChild(document.createTextNode('<link rel="license" href="https://website.com">'));
				} else if (el == 'head-p3p' && document.getElementById('head-p3p').checked === true) {
					code.appendChild(document.createTextNode('<link rel="P3Pv1" href="p3p.xml">'));
				} else if (el == 'head-search' && document.getElementById('head-search').checked === true) {
					code.appendChild(document.createTextNode('<link rel="search" type="application/opensearchdescription+xml" title="Website" href="opensearch.xml">'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('head').children[1].children[1].appendChild(p); }
			});
			document.getElementById('head-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('head-download');
	button2.addEventListener('click', function(){
		var header =	'<!DOCTYPE html>' + '\n' +
						'<html lang="en">' + '\n' +
						'	<head>' + '\n';
		var meta = ""; var arr = document.getElementById('head').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + '		' + document.getElementById('head').children[1].children[1].children[i].innerText + '\n'; }
		var body =		'	</head>' + '\n' +
						'	<body>' + '\n';
		var footer =	'	</body>' + '\n' +
						'</html>';
		download('header.html', 'text/html', header + meta + body + footer );
	},false);
})();
(function htaccess(){
	let button = document.getElementById('hta-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('.htaccess').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading .htaccess'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('.htaccess').children[1].childElementCount == 1) {
			document.getElementById('.htaccess').children[1].appendChild(fieldset);
			document.getElementById('.htaccess').children[1].children[1].appendChild(legend);
			var tag = ['hta', 'hta-corimg','hta-corttf','hta-corall','hta-corsub','hta-cortiming',
			'hta-ie','hta-encode','hta-mime',
			'hta-noerr','hta-404','hta-301','hta-https','hta-nwww','hta-ywww','hta-ver',
			'hta-block','hta-hotlink','hta-ckjk','hta-csp','hta-index','hta-hidden','hta-backup','hta-hsts','hta-sniff','hta-php','hta-usize','hta-xss','hta-refer','hta-trace','hta-sig',
			'hta-gzip','hta-brotli','hta-gzip2','hta-proxy','hta-etag','hta-expire'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'hta') {
					code.appendChild(document.createTextNode('# .htaccess - Apache Server Configs (Based upon https://github.com/h5bp/server-configs-apache)'));
				} else if (el == 'hta-corimg' && document.getElementById('hta-corimg').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_setenvif.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(avifs?|bmp|cur|gif|ico|jpe?g|a?png|jxl|svgz?|webp)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('SetEnvIf Origin ":" IS_CORS'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Access-Control-Allow-Origin "*" env=IS_CORS'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-corttf' && document.getElementById('hta-corttf').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(eot|otf|tt[cf]|woff2?)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Access-Control-Allow-Origin "*"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-corall' && document.getElementById('hta-corall').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Access-Control-Allow-Origin "*"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-corsub' && document.getElementById('hta-corsub').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Access-Control-Allow-Origin "sub.domain.com"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-cortiming' && document.getElementById('hta-cortiming').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Timing-Allow-Origin: "*"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-ie' && document.getElementById('hta-ie').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set X-UA-Compatible "IE=edge" "expr=%{CONTENT_TYPE} =~ m#text/html#i"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-encode' && document.getElementById('hta-encode').checked === true) {
					code.appendChild(document.createTextNode('AddDefaultCharset utf-8'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_mime.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddCharset'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddCharset utf-8 .appcache .atom .bbaw .css .geojson .htc .ics .kml .js .json .jsonld .log .manifest .map .markdown .md .mjs .php .rdf .rss .topojson .txt .vcard .vcf .vtt .webapp .webmanifest .xloc .xml'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-mime' && document.getElementById('hta-mime').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_mime.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/atom+xml   atom'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/json   json map topojson'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/ld+json   jsonld'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/rss+xml   rss'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/geo+json   geojson'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/rdf+xml   rdf'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/xml   xml'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/manifest+json   webmanifest'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/x-web-app-manifest+json   webapp'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/wasm    wasm'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/octet-stream   safariextz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/x-bb-appworld   bbaw'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/x-chrome-extension   crx'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/x-opera-extension   oex'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/x-xpinstall   xpi'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/javascript   js mjs'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/cache-manifest   appcache'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/calendar   ics'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/markdown   markdown md'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/vcard   vcard vcf'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/vnd.rim.location.xloc   xloc'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/vtt   vtt'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/x-component   htc'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/x-icon   cur ico'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/avif   avif'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/avif-sequence   avifs'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/bmp   bmp'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/svg+xml   svg svgz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/webp   webp'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType font/woff   woff'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType font/woff2   woff2'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/vnd.ms-fontobject application/font-woff application/x-font-woff font/woff   eot'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType font/ttf   ttf'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType font/collection   ttc'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType font/otf   otf'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType audio/mp4   aac f4a f4b m4a'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType audio/mpeg   mp3'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType audio/ogg   oga ogg opus'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType audio/midi   mid midi kar'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType video/mp4   f4v f4p m4v mp4'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType video/ogg   ogv'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType video/webm   webm'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType video/x-flv   flv'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-noerr' && document.getElementById('hta-noerr').checked === true) {
					code.appendChild(document.createTextNode('Options -MultiViews'));
				} else if (el == 'hta-404' && document.getElementById('hta-404').checked === true) {
					code.appendChild(document.createTextNode('ErrorDocument 403 https://domain.com/error.html#403'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ErrorDocument 404 https://domain.com/error.html#404'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ErrorDocument 500 https://domain.com/error.html#500'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ErrorDocument 503 https://domain.com/error.html#503'));
				} else if (el == 'hta-301' && document.getElementById('hta-301').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Options +FollowSymlinks'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# Options +SymLinksIfOwnerMatch'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# RewriteBase /'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# RewriteOptions <options>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^old/(.*)$ /new/$1 [R=301,NC,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# Redirect 301 /old/file.html https://domain.com/new/file.html'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-https' && document.getElementById('hta-https').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTPS} !=on'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-nwww' && document.getElementById('hta-nwww').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTPS} =on'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ - [E=PROTO:https]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTPS} !=on'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ - [E=PROTO:http]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ %{ENV:PROTO}://%1%{REQUEST_URI} [R=301,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-ywww' && document.getElementById('hta-ywww').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTPS} =on'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ - [E=PROTO:https]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTPS} !=on'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ - [E=PROTO:http]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP_HOST} !^www\\. [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{SERVER_ADDR} !=127.0.0.1'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{SERVER_ADDR} !=::1'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^ %{ENV:PROTO}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-ver' && document.getElementById('hta-ver').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_FILENAME} !-f'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule ^(.+)\\.(\\w+)\\.(avifs?|bmp|css|cur|gif|ico|jpe?g|m?js|a?png|jxl|svgz?|webp|webmanifest)$ $1.$3 [L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-block' && document.getElementById('hta-block').checked === true) {
					code.appendChild(document.createTextNode('order allow,deny'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# Block 1 IP'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Deny from 11.22.33.44'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# Block IP Range'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Deny from 11.22.33.44 99.88.77.66'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('allow from all'));
				} else if (el == 'hta-hotlink' && document.getElementById('hta-hotlink').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP_REFERER} !^$'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP_REFERER} !^http://(www\\.)domain.com/.*$ [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule \\.(avifs?|a?png|jxl|gif|jpe?g|svgz?|webp)$ https://website.com/nolink.gif [R,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-ckjk' && document.getElementById('hta-ckjk').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-csp' && document.getElementById('hta-csp').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header set Content-Security-Policy "default-src \'self\';"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-index' && document.getElementById('hta-index').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_autoindex.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Options -Indexes'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-hidden' && document.getElementById('hta-hidden').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_URI} "!(^|/)\\.well-known/([^./]+./?)+$" [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{SCRIPT_FILENAME} -d [OR]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{SCRIPT_FILENAME} -f'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule "(^|/)\\." - [F]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-backup' && document.getElementById('hta-backup').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_authz_core.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "(^#.*#|\\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Require all denied'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-hsts' && document.getElementById('hta-hsts').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == \'on\'"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == \'on\'"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-sniff' && document.getElementById('hta-sniff').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set X-Content-Type-Options "nosniff"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-php' && document.getElementById('hta-php').checked === true) {
					code.appendChild(document.createTextNode('ServerTokens Prod'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{QUERY_STRING} PHP[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12} [NC,OR]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_URI} =PHP[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12} [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule .* - [F,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-usize' && document.getElementById('hta-usize').checked === true) {
					code.appendChild(document.createTextNode('LimitRequestBody 10240000'));
				} else if (el == 'hta-xss' && document.getElementById('hta-xss').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set X-XSS-Protection "1; mode=block" "expr=%{CONTENT_TYPE} =~ m#text/html#i"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-refer' && document.getElementById('hta-refer').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\\/(css|html|javascript)|application\\/pdf|xml#i"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-trace' && document.getElementById('hta-trace').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_rewrite.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteEngine On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_METHOD} ^TRACE [NC]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule .* - [R=405,L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-sig' && document.getElementById('hta-sig').checked === true) {
					code.appendChild(document.createTextNode('ServerSignature Off'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header unset X-Powered-By'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header always unset X-Powered-By'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-gzip' && document.getElementById('hta-gzip').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_deflate.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_setenvif.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\\s*,?\\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_filter.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddOutputFilterByType DEFLATE text/text text/plain text/vcard text/calendar text/vtt text/cache-manifest text/x-cross-domain-policy text/vnd.rim.location.xloc text/x-component text/markdown text/html application/xhtml+xml text/xml application/xml application/rss+xml application/atom+xml application/rdf+xml application/vnd.google-earth.kml+xml text/css text/javascript text/ecmascript application/javascript application/x-javascript application/json application/ld+json application/manifest+json application/schema+json application/geo+json application/x-web-app-manifest+json application/wasm font/collection font/eot font/opentype font/otf font/ttf application/x-font-ttf application/vnd.ms-fontobject application/font-woff application/x-font-woff font/woff image/svg+xml image/vnd.microsoft.icon image/x-icon'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_mime.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddEncoding gzip   svgz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-brotli' && document.getElementById('hta-brotli').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP:Accept-Encoding} br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_FILENAME}\\.br -f'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule \\.(css|ics|js|json|html|svg)$ %{REQUEST_URI}.br [L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule \\.br$ - [E=no-gzip:1]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.br$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_mime.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RemoveLanguage .br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/css   css.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/calendar   ics.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/vcard   vcf.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/javascript   js.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/json   json.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/html   html.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/svg+xml   svg.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddCharset utf-8 .css.br .ics.br .js.br .json.br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header append Vary Accept-Encoding'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddEncoding br .br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-gzip2' && document.getElementById('hta-gzip2').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{HTTP:Accept-Encoding} gzip'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteCond %{REQUEST_FILENAME}\\.gz -f'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule \\.(css|ics|js|json|html|svg)$ %{REQUEST_URI}.gz [L]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RewriteRule \\.gz$ - [E=no-gzip:1]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.gz$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<IfModule mod_mime.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('RemoveLanguage .gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/css   css.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/calendar   ics.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/vcard   vcf.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/javascript   js.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType application/json   json.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType text/html   html.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddType image/svg+xml   svg.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddCharset utf-8 .css.gz .ics.gz .js.gz .json.gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('AddEncoding gzip .gz'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-proxy' && document.getElementById('hta-proxy').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header merge Cache-Control "no-transform"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
				} else if (el == 'hta-etag' && document.getElementById('hta-etag').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_headers.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Header unset ETag'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</IfModule>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('FileETag None'));
				} else if (el == 'hta-expire' && document.getElementById('hta-expire').checked === true) {
					code.appendChild(document.createTextNode('<IfModule mod_expires.c>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresActive On'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access plus 1 month"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(txt|log|html|php|markdown|md|json|geojson|topojson|jsonld|manifest|webapp|appcache|webmanifest)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(ic[os]|vcard|vcf|vtt|xml|atom|rss|rdf|kml)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access plus 1 hour"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(ico|cur|swf|pdf|doc[x]|xls[x]|ppt[x]|rtf)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access plus 1 week"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(css|js|m?js|otf|eot|tt[cf]|woff2?)$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access plus 1 month"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<FilesMatch "\\.(avifs?|crx|xpi|safariextz|htc|oex|wasm|svgz?|bmp|gif|jpe?g|a?png|jxl|tif?f|web[mp]|opus|m4[av]|midi?|mp[34]|og[agv]|aac|f4[abpv]|flv|wav|mov|avi|mk[av])$">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ExpiresDefault "access plus 1 year"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</FilesMatch>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('.htaccess').children[1].children[1].appendChild(p); }
			});
			document.getElementById('hta-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('hta-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('.htaccess').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('.htaccess').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('.htaccess', 'application/octet-stream', meta );
	},false);
})();
(function adstxt(){
	let button = document.getElementById('ads-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('ads.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading ads.txt'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('ads.txt').children[1].childElementCount == 1) {
			document.getElementById('ads.txt').children[1].appendChild(fieldset);
			document.getElementById('ads.txt').children[1].children[1].appendChild(legend);
			var tag = ['ads','ads-record','ads-sub','ads-contact'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'ads') {
					code.appendChild(document.createTextNode('# ads.txt - Approved Advertisers for this Website'));
				} else if (el == 'ads-record' && document.getElementById('ads-record').checked === true) {
					code.appendChild(document.createTextNode('# URL (Advertiser), Account ID, DIRECT / RESELLER, Advert ID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('domain.com, 12345, DIRECT, f794e0a46588c21f'));
				} else if (el == 'ads-sub' && document.getElementById('ads-sub').checked === true) {
					code.appendChild(document.createTextNode('SUBDOMAIN=sub.domain.com'));
				} else if (el == 'ads-contact' && document.getElementById('ads-contact').checked === true) {
					code.appendChild(document.createTextNode('CONTACT=email@domain.com'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('ads.txt').children[1].children[1].appendChild(p); }
			});
			document.getElementById('ads-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('ads-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('ads.txt').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('ads.txt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('ads.txt', 'text/plain', meta );
	},false);
})();
(function carbontxt(){
	let button = document.getElementById('carbon-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('carbon.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading carbon.txt'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('carbon.txt').children[1].childElementCount == 1) {
			document.getElementById('carbon.txt').children[1].appendChild(fieldset);
			document.getElementById('carbon.txt').children[1].children[1].appendChild(legend);
			var tag = ['carbon','carbon-record','carbon-details'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'carbon') {
					code.appendChild(document.createTextNode('# carbon.txt - Verify the Web\'s Green Infrastructure'));
				} else if (el == 'carbon-record' && document.getElementById('carbon-record').checked === true) {
					code.appendChild(document.createTextNode('[upstream]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# URL (Host) Datacenter (Location)'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('domain.com london'));
				} else if (el == 'carbon-details' && document.getElementById('carbon-details').checked === true) {
					code.appendChild(document.createTextNode('# Method: CREDITS / RENEWABLE / BOTH'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('# Percent: 100%'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('carbon.txt').children[1].children[1].appendChild(p); }
			});
			document.getElementById('carbon-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('carbon-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('carbon.txt').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('carbon.txt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('carbon.txt', 'text/plain', meta );
	},false);
})();
(function changelog(){
	let button = document.getElementById('change-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('change.log').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading change.log'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('change.log').children[1].childElementCount == 1) {
			document.getElementById('change.log').children[1].appendChild(fieldset);
			document.getElementById('change.log').children[1].children[1].appendChild(legend);
			var tag = ['change','change-unrel','change2',
			'change-add','change-changelog','change-dessys','change-hta','change-html','change-img','change-css','change-xfont','change-gfont','change-license','change-humans','change-security','change-ads','change-robots','change-favicon','change-pwa','change-event','change-vcard','change-rss','change-dcmi','change-sitemap','change-opensearch','change-subtitles','change-carbon','change-dnt','change-pics','change-js',
			'change-cha','change-dep','change-rem','change-fix','change-sec','change-guide'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'change') {
					code.appendChild(document.createTextNode('# Changelog - Website Name\'s Website'));
				} else if (el == 'change-unrel' && document.getElementById('change-unrel').checked === true) {
					code.appendChild(document.createTextNode('## [Unreleased]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} if (el == 'change2') {
					var date = new Date().toISOString().substr(0, 10);
					code.appendChild(document.createTextNode('## 1.0.0 - ' + date));
				} else if (el == 'change-add' && document.getElementById('change-add').checked === true) {
					code.appendChild(document.createTextNode('### Added'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-changelog' && document.getElementById('change-changelog').checked === true) {
					code.appendChild(document.createTextNode('- change.log File with transparent version tracking.'));
				} else if (el == 'change-dessys' && document.getElementById('change-dessys').checked === true) {
					code.appendChild(document.createTextNode('- Design System compiled to match product expectations.'));
				} else if (el == 'change-hta' && document.getElementById('change-hta').checked === true) {
					code.appendChild(document.createTextNode('- .htaccess File with Headers, Rewrites, Security, & Performance modules.'));
				} else if (el == 'change-html' && document.getElementById('change-html').checked === true) {
					code.appendChild(document.createTextNode('- index.html & error.html File with metadata & content.'));
				} else if (el == 'change-img' && document.getElementById('change-img').checked === true) {
					code.appendChild(document.createTextNode('- Licensed SVG images along with any generated external JPEG & PNG.'));
				} else if (el == 'change-css' && document.getElementById('change-css').checked === true) {
					code.appendChild(document.createTextNode('- style.css with Base, RWD, Animate, Modes, Print, A11y & Quirks sheets.'));
				} else if (el == 'change-xfont' && document.getElementById('change-xfont').checked === true) {
					code.appendChild(document.createTextNode('- <Name> Typeface for Personal brand (x1 license per site).'));
				} else if (el == 'change-gfont' && document.getElementById('change-gfont').checked === true) {
					code.appendChild(document.createTextNode('- <Name> Typeface from Google Fonts (self hosted).'));
				} else if (el == 'change-license' && document.getElementById('change-license').checked === true) {
					code.appendChild(document.createTextNode('- LICENSE ADDED - Check: https://website.com/license.html'));
				} else if (el == 'change-humans' && document.getElementById('change-humans').checked === true) {
					code.appendChild(document.createTextNode('- humans.txt File with Website creation credits.'));
				} else if (el == 'change-security' && document.getElementById('change-security').checked === true) {
					code.appendChild(document.createTextNode('- security.txt File with contact information.'));
				} else if (el == 'change-ads' && document.getElementById('change-ads').checked === true) {
					code.appendChild(document.createTextNode('- ads.txt File with authorized advertiser information.'));
				} else if (el == 'change-robots' && document.getElementById('change-robots').checked === true) {
					code.appendChild(document.createTextNode('- robots.txt File with integrated sitemap link.'));
				} else if (el == 'change-favicon' && document.getElementById('change-favicon').checked === true) {
					code.appendChild(document.createTextNode('- favicon.ico File with PNG\'s for iOS, Android, etc.'));
				} else if (el == 'change-pwa' && document.getElementById('change-pwa').checked === true) {
					code.appendChild(document.createTextNode('- site.webmanifest File & browserconfig.xml for PWA\'s.'));
				} else if (el == 'change-event' && document.getElementById('change-event').checked === true) {
					code.appendChild(document.createTextNode('- event.ics File with Calendar events for the website.'));
				} else if (el == 'change-vcard' && document.getElementById('change-vcard').checked === true) {
					code.appendChild(document.createTextNode('- vcard.vcf File with Contact information for clients.'));
				} else if (el == 'change-rss' && document.getElementById('change-rss').checked === true) {
					code.appendChild(document.createTextNode('- rss.xml, atom.xml, feed.json & feed.opml for syndication.'));
				} else if (el == 'change-dcmi' && document.getElementById('change-dcmi').checked === true) {
					code.appendChild(document.createTextNode('- dublin.rdf, foaf.rdf, geo.kml & geo.rdf for DCMI metadata.'));
				} else if (el == 'change-sitemap' && document.getElementById('change-sitemap').checked === true) {
					code.appendChild(document.createTextNode('- sitemap.xml File with page listings and IA for site.'));
				} else if (el == 'change-opensearch' && document.getElementById('change-opensearch').checked === true) {
					code.appendChild(document.createTextNode('- opensearch.xml File with basic Google search integration.'));
				} else if (el == 'change-subtitles' && document.getElementById('change-subtitles').checked === true) {
					code.appendChild(document.createTextNode('- subtitles.vtt File with accessible videos across site.'));
				} else if (el == 'change-carbon' && document.getElementById('change-carbon').checked === true) {
					code.appendChild(document.createTextNode('- carbon.txt File for verifying eco friendly credentials.'));
				} else if (el == 'change-dnt' && document.getElementById('change-dnt').checked === true) {
					code.appendChild(document.createTextNode('- p3p.xml, dnt-policy.txt, crossdomain.xml & clientaccesspolicy.xml for security.'));
				} else if (el == 'change-pics' && document.getElementById('change-pics').checked === true) {
					code.appendChild(document.createTextNode('- PICS.rdf & powder.xml for child-friendly platforms.'));
				} else if (el == 'change-js' && document.getElementById('change-js').checked === true) {
					code.appendChild(document.createTextNode('- script.js File with linted, minified JavaScript.'));
				} else if (el == 'change-cha' && document.getElementById('change-cha').checked === true) {
					code.appendChild(document.createTextNode('### Changed'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-dep' && document.getElementById('change-dep').checked === true) {
					code.appendChild(document.createTextNode('### Deprecated'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-rem' && document.getElementById('change-rem').checked === true) {
					code.appendChild(document.createTextNode('### Removed'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-fix' && document.getElementById('change-fix').checked === true) {
					code.appendChild(document.createTextNode('### Fixed'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-sec' && document.getElementById('change-sec').checked === true) {
					code.appendChild(document.createTextNode('### Security'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Item.'));
				} else if (el == 'change-guide' && document.getElementById('change-guide').checked === true) {
					code.appendChild(document.createTextNode('## [Guide]'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Added: New features.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Changed: Altered functionality.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Deprecated: Disappearing features.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Removed: Eliminated features.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Fixed: Bugs patched.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- Security: Solved vulnerabilities.'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('change.log').children[1].children[1].appendChild(p); }
			});
			document.getElementById('change-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('change-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('change.log').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('change.log').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('change.log', 'text/plain', meta );
	},false);
})();
(function clientaccesspolicyxml(){
	let button = document.getElementById('clientaccesspolicy-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('clientaccesspolicy.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading clientaccesspolicy.xml'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('clientaccesspolicy.xml').children[1].childElementCount == 1) {
			document.getElementById('clientaccesspolicy.xml').children[1].appendChild(fieldset);
			document.getElementById('clientaccesspolicy.xml').children[1].children[1].appendChild(legend);
			var tag = ['clientaccesspolicy'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'clientaccesspolicy') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<access-policy>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<cross-domain-access>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<policy>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-from http-request-headers="SOAPAction">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<domain uri="*"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</allow-from>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<grant-to>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<resource path="/" include-subpaths="true"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</grant-to>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</policy>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</cross-domain-access>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</access-policy>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('clientaccesspolicy.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('clientaccesspolicy-generate').classList.replace('show','hide');
			document.getElementById('clientaccesspolicy-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('clientaccesspolicy-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('clientaccesspolicy.xml').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('clientaccesspolicy.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('clientaccesspolicy.xml', 'text/xml', meta );
	},false);
})();
(function crossdomainxml(){
	let button = document.getElementById('crossdomain-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('crossdomain.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading crossdomain.xml'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('crossdomain.xml').children[1].childElementCount == 1) {
			document.getElementById('crossdomain.xml').children[1].appendChild(fieldset);
			document.getElementById('crossdomain.xml').children[1].children[1].appendChild(legend);
			var tag = ['flash','flash-domain','flash-min','flash-max','flash2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'flash') {
					code.appendChild(document.createTextNode('<?xml version="1.0"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<cross-domain-policy>'));
				} else if (el == 'flash-domain' && document.getElementById('flash-domain').checked === true) {
					code.appendChild(document.createTextNode('<site-control permitted-cross-domain-policies="master-only"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-access-from domain="*.domain.com"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-access-from domain="www.domain.com"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-http-request-headers-from domain="*.adobe.com" headers="SOAPAction"/>'));
				} else if (el == 'flash-min' && document.getElementById('flash-min').checked === true) {
					code.appendChild(document.createTextNode('<site-control permitted-cross-domain-policies="none"/>'));
				} else if (el == 'flash-max' && document.getElementById('flash-max').checked === true) {
					code.appendChild(document.createTextNode('<site-control permitted-cross-domain-policies="all"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-access-from domain="*" secure="false"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<allow-http-request-headers-from domain="*" headers="*" secure="false"/>'));
				} else if (el == 'flash2') {
					code.appendChild(document.createTextNode('</cross-domain-policy>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('crossdomain.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('crossdomain-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('crossdomain-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('crossdomain.xml').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('crossdomain.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('crossdomain.xml', 'text/xml', meta );
	},false);
})();
(function dublinrdf(){
	let button = document.getElementById('dublin-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('dublin.rdf').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading dublin.rdf'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('dublin.rdf').children[1].childElementCount == 1) {
			document.getElementById('dublin.rdf').children[1].appendChild(fieldset);
			document.getElementById('dublin.rdf').children[1].children[1].appendChild(legend);
			var tag = ['dublin','dublin-con','dublin-cov','dublin-cre','dublin-dat','dublin-des','dublin-for','dublin-ide','dublin-lan','dublin-pub','dublin-rel','dublin-rig','dublin-sou','dublin-sub','dublin-tit','dublin-typ','dublin2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'dublin') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dcterms="http://purl.org/dc/terms/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdf:Description rdf:about="https://domain.com/">'));
				} else if (el == 'dublin-con' && document.getElementById('dublin-con').checked === true) {
					code.appendChild(document.createTextNode('<dc.contributor>Name</dc.contributor>'));
				} else if (el == 'dublin-cov' && document.getElementById('dublin-cov').checked === true) {
					code.appendChild(document.createTextNode('<dc.coverage>Location</dc.coverage>'));
				} else if (el == 'dublin-cre' && document.getElementById('dublin-cre').checked === true) {
					code.appendChild(document.createTextNode('<dc:creator>Name</dc:creator>'));
				} else if (el == 'dublin-dat' && document.getElementById('dublin-dat').checked === true) {
					code.appendChild(document.createTextNode('<dc:date>YYYY-MM-DD</dc:date>'));
				} else if (el == 'dublin-des' && document.getElementById('dublin-des').checked === true) {
					code.appendChild(document.createTextNode('<dc:description>Description</dc:description>'));
				} else if (el == 'dublin-for' && document.getElementById('dublin-for').checked === true) {
					code.appendChild(document.createTextNode('<dc.format>application/pdf</dc.format>'));
				} else if (el == 'dublin-ide' && document.getElementById('dublin-ide').checked === true) {
					code.appendChild(document.createTextNode('<dc.identifier>000-0-00-000000-0</dc.identifier>'));
				} else if (el == 'dublin-lan' && document.getElementById('dublin-lan').checked === true) {
					code.appendChild(document.createTextNode('<dc:language>en</dc:language>'));
				} else if (el == 'dublin-pub' && document.getElementById('dublin-pub').checked === true) {
					code.appendChild(document.createTextNode('<dc:publisher>Publisher</dc:publisher>'));
				} else if (el == 'dublin-rel' && document.getElementById('dublin-rel').checked === true) {
					code.appendChild(document.createTextNode('<dc.relation>https://domain.com/</dc.relation>'));
				} else if (el == 'dublin-rig' && document.getElementById('dublin-rig').checked === true) {
					code.appendChild(document.createTextNode('<dc.rights>https://domain.com/</dc.rights>'));
				} else if (el == 'dublin-sou' && document.getElementById('dublin-sou').checked === true) {
					code.appendChild(document.createTextNode('<dc:source>https://domain.com/</dc:source>'));
				} else if (el == 'dublin-sub' && document.getElementById('dublin-sub').checked === true) {
					code.appendChild(document.createTextNode('<dc.subject>Subject, Subject</dc.subject>'));
				} else if (el == 'dublin-tit' && document.getElementById('dublin-tit').checked === true) {
					code.appendChild(document.createTextNode('<dc.title>Title</dc.title>'));
				} else if (el == 'dublin-typ' && document.getElementById('dublin-typ').checked === true) {
					code.appendChild(document.createTextNode('<dc.type>Category</dc.type>'));
				} else if (el == 'dublin2') {
					code.appendChild(document.createTextNode('</rdf:Description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rdf:RDF>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('dublin.rdf').children[1].children[1].appendChild(p); }
			});
			document.getElementById('dublin.rdf').children[1].children[1].appendChild(fieldset2);
			document.getElementById('dublin.rdf').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="author" type="application/rdf+xml" href="dublin.rdf">'));
			document.getElementById('dublin.rdf').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('dublin-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('dublin-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('dublin.rdf').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('dublin.rdf').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('dublin.rdf', 'application/rdf+xml', meta );
	},false);
})();
(function errorhtml(){
	let button = document.getElementById('error-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('error.html').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading error.html'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('.htaccess'));
		if (document.getElementById('error.html').children[1].childElementCount == 1) {
			document.getElementById('error.html').children[1].appendChild(fieldset);
			document.getElementById('error.html').children[1].children[1].appendChild(legend);
			var tag = ['error','error-400','error-401','error-402','error-403','error-404','error-405','error-406','error-407','error-408','error-409','error-410','error-411','error-412','error-413','error-414','error-415','error-416','error-417','error-418','error-421','error-422','error-423','error-424','error-426','error-428','error-429','error-431','error-444','error-451','error-499',
			'error-500','error-501','error-502','error-503','error-504','error-505','error-506','error-507','error-508','error-510','error-511','error-599','error2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'error') {
					code.appendChild(document.createTextNode('<!DOCTYPE html>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<html lang="en">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta charset="utf-8">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="viewport" content="width=device-width, initial-scale=1">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<title>Error - Product</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="description" content="Description.">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<style>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.error:not(:target) { height: 1px; left: -1000px; overflow: hidden; position: absolute; top: -1px; width: 1px; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.error:target { height: auto; left: auto; overflow: auto; position: relative; top: auto; width: auto; z-index: 1; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</style>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<header>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h1>Product</h1>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</header>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<main>'));
				} else if (el == 'error-400' && document.getElementById('error-400').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="400">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>400</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Bad Request</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Your browser sent a request that this server could not understand. Try Again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-401' && document.getElementById('error-401').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="401">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>401</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Unauthorized</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You cannot access this page until you have logged in and authenticated.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-402' && document.getElementById('error-402').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="402">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>402</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Payment Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You need to pay or subscribe in order to access this content.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-403' && document.getElementById('error-403').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="403">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>403</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Access Forbidden</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Sorry, you\'ll need to login to visit this area.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-404' && document.getElementById('error-404').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="404">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>404</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Resource Not Found</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You made a wrong turn. Lets try a different link.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-405' && document.getElementById('error-405').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="405">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>405</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Method Not Allowed</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This page exists, but something weird happened. Please try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-406' && document.getElementById('error-406').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="406">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>406</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Not Acceptable</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Your browser is making strange requests. Check your settings and try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-407' && document.getElementById('error-407').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="407">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>407</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Proxy Authentication Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You cannot access this page until you have authenticated your proxy server.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-408' && document.getElementById('error-408').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="408">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>408</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Request Timeout</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website took too long to respond. Try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-409' && document.getElementById('error-409').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="409">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>409</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Conflict</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The file you\'re trying to upload is older than the existing one.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-410' && document.getElementById('error-410').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="410">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>410</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Gone</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This resource is no longer available. Lets try a different link.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-411' && document.getElementById('error-411').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="411">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>411</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Length Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We made a mistake. Please try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-412' && document.getElementById('error-412').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="412">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>412</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Precondition Failed</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Our Website flagged up some issues. Try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-413' && document.getElementById('error-413').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="413">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>413</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Payload Too Large</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You can\'t upload a resource that big. Try making it smaller!</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-414' && document.getElementById('error-414').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="414">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>414</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Request-URI Too Long</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website address is too long. Try a different link.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-415' && document.getElementById('error-415').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="415">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>415</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Unsupported Media Type</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This website cannot view this file type. Contact support for a fix.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-416' && document.getElementById('error-416').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="416">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>416</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Requested Range Not Satisfiable</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Part of the file can\'t be accessed. Clear your cache and try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-417' && document.getElementById('error-417').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="417">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>417</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Expectation Failed</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The server encountered an error. Please try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-418' && document.getElementById('error-418').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="418">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>418</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>I\'m A Teapot</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>I\'m a little teapot short and stout, here\'s my handle, here\'s my spout.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-421' && document.getElementById('error-421').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="421">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>421</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Misdirected Request</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This server is having TLS issues. Contact support for a fix.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-422' && document.getElementById('error-422').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="422">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>422</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Unprocessable Entity</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This page has code bugs preventing it from loading. Contact support for a fix.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-423' && document.getElementById('error-423').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="423">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>423</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Locked</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>No-one can access this page. Sorry. Try another instead.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-424' && document.getElementById('error-424').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="424">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>424</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Failed Dependency</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>This page broke while requesting something. Please try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-426' && document.getElementById('error-426').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="426">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>426</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Upgrade Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>An error occured. Ensure you\'re using the latest browser version and try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-428' && document.getElementById('error-428').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="428">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>428</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Precondition Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Our Website flagged up some issues. Try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-429' && document.getElementById('error-429').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="429">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>429</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Too Many Requests</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website has too many visitors. Please try again in a few minutes.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-431' && document.getElementById('error-431').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="431">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>431</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Request Header Fields Too Large</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We encountered an error. Clear your cache and try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-444' && document.getElementById('error-444').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="444">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>444</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Connection Closed Without Response</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website encountered an error. Contact support for a fix.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-451' && document.getElementById('error-451').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="451">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>451</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Unavailable For Legal Reasons</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We\'ve had to remove this page due to a takedown request. Sorry!</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-499' && document.getElementById('error-499').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="499">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>499</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Client Closed Request</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website encountered an error. Contact support for a fix.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-500' && document.getElementById('error-500').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="500">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>500</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Internal Server Error</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We broke something. Sorry! Refresh, or try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-501' && document.getElementById('error-501').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="501">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>501</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Not Implemented</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We’re missing something. Let us know to fix this bug.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-502' && document.getElementById('error-502').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="502">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>502</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Bad Gateway</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We got an error from a service we use. Please try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-503' && document.getElementById('error-503').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="503">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>503</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Gateway Timeout</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>A service we use didn’t respond to our request. Try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-504' && document.getElementById('error-504').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="504">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>504</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Internal Server Error</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We broke something. Sorry! Refresh, or try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-505' && document.getElementById('error-505').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="505">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>505</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>HTTP Version Not Supported</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Your web browser is out of date. It\'s time to upgrade to see this page.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-506' && document.getElementById('error-506').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="506">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>506</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Variant Also Negotiates</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We broke something. Sorry! Refresh, or try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-507' && document.getElementById('error-507').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="507">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>507</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Insufficient Storage</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The document is too big for us to handle. Contact support for assistance.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-508' && document.getElementById('error-508').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="508">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>508</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Loop Detected</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We redirected you incorrectly. Lets try a different link.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-510' && document.getElementById('error-510').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="510">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>510</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Not Extended</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>We encountered an error with your request. Please try again.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-511' && document.getElementById('error-511').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="511">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>511</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Network Authentication Required</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>You cannot access this page until you have logged in and authenticated.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error-599' && document.getElementById('error-599').checked === true) {
					code.appendChild(document.createTextNode('<article class="error" id="599">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>599</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h3>Network Connect Timeout</h3>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>The website took too long to respond. Try again later.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
				} else if (el == 'error2') {
					code.appendChild(document.createTextNode('</main>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<footer>'));
					code.appendChild(document.createElement('br'));
					var date = new Date(); var year = date.getFullYear();
					code.appendChild(document.createTextNode('<p>Copyright, ' + year +'.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Built by Your Name.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</footer>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</html>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('error.html').children[1].children[1].appendChild(p); }
			});
			document.getElementById('error.html').children[1].children[1].appendChild(fieldset2);
			document.getElementById('error.html').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('Options -MultiViews'));
			head.appendChild(document.createElement('br'));
			const arr = ['400','401','402','403','404','405','406','407','408','409','410','411','412','413','414','415','416','417','418','421','422','423','424','426','428','429','431','444','451','499',
			'500','501','502','503','504','505','506','507','508','510','511','599'];
			for (const elem of arr) {
				if (document.getElementById('error-' + elem).checked === true) {
					head.appendChild(document.createTextNode('ErrorDocument ' + elem + ' https://domain.com/error.html#' + elem));
					head.appendChild(document.createElement('br')); } }
			document.getElementById('error.html').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('error-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('error-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('error.html').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('error.html').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('error.html', 'text/html', meta );
	},false);
})();
(function eventics(){
	let button = document.getElementById('event-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('event.ics').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading event.ics'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('event.ics').children[1].childElementCount == 1) {
			document.getElementById('event.ics').children[1].appendChild(fieldset);
			document.getElementById('event.ics').children[1].children[1].appendChild(legend);
			var tag = ['event','event-summary','event-timestamp','event-startend','event-frequency', 'event-location','event-url', 'event-organizer','event-description','event-reminder','event-uid','event2'];
			tag.forEach(function(el) {
				var summary; var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'event') {
					code.appendChild(document.createTextNode('BEGIN:VCALENDAR'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('VERSION:2.0'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('event-summary').value == "") { summary = "Event"; }
					else { summary = document.getElementById('event-summary').value }
					code.appendChild(document.createTextNode('PRODID:-//Company//' + summary + '//EN'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('CALSCALE:GREGORIAN'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('BEGIN:VEVENT'));
				} else if (el == 'event-summary') {
					if (document.getElementById('event-summary').value == "") {
						code.appendChild(document.createTextNode('SUMMARY:Event')); }
					else {
						code.appendChild(document.createTextNode('SUMMARY:' + document.getElementById('event-summary').value)); }
				} else if (el == 'event-timestamp' && document.getElementById('event-timestamp').checked === true) {
					var date = new Date().toISOString().substr(0, 19);
					code.appendChild(document.createTextNode('DTSTAMP:' + date.replace(/-/g,'').replace(/:/g,'') + 'Z'));
				} else if (el == 'event-startend') {
					var cal = new Date();
					var y = cal.getFullYear(); var m = cal.getMonth(); m = m + 1; var d = cal.getDate();
					code.appendChild(document.createTextNode('DTSTART;VALUE=DATE:' + y + m + d));
					code.appendChild(document.createElement('br'));
					d = d + 1;
					code.appendChild(document.createTextNode('DTEND;VALUE=DATE:' + y + m + d));
				} else if (el == 'event-frequency') {
					var frequency = ""; var repeat = ""; var month = ""; var day = "";
					if (document.getElementById('event-frequency').value != "") {
						frequency = "FREQ=" + document.getElementById('event-frequency').value + ";"; }
					if (document.getElementById('event-repeat').value != "") {
						repeat = "COUNT=" + document.getElementById('event-repeat').value + ";"; }
					if (document.getElementById('event-month').value != "") {
						month = "BYMONTH=" + document.getElementById('event-month').value + ";"; }
					if (document.getElementById('event-day').value != "") {
						day = "BYDAY=" + document.getElementById('event-day').value + ";"; }
					if (frequency != "" || repeat != "" || month != "" || day != "" ) {
						code.appendChild(document.createTextNode('RRULE:' + frequency + repeat + month + day)); }
				} else if (el == 'event-location' && document.getElementById('event-location').checked === true) {
					code.appendChild(document.createTextNode('LOCATION:Town\\nCountry'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('GEO:00.000000,0.000000'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-TITLE=Town\\\\nCountry:geo:00.000000,0.000000'));
				} else if (el == 'event-url' && document.getElementById('event-url').checked === true) {
					code.appendChild(document.createTextNode('URL;VALUE=URI:https://domain.com'));
				} else if (el == 'event-organizer' && document.getElementById('event-organizer').checked === true) {
					code.appendChild(document.createTextNode('ORGANIZER:Company'));
				} else if (el == 'event-description' && document.getElementById('event-description').checked === true) {
					code.appendChild(document.createTextNode('DESCRIPTION:Details'));
				} else if (el == 'event-reminder' && document.getElementById('event-reminder').checked === true) {
					code.appendChild(document.createTextNode('BEGIN:VALARM'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('TRIGGER:-PT60M'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ACTION:DISPLAY'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('DESCRIPTION:Reminder'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('END:VALARM'));
				} else if (el == 'event-uid') {
					let random = Math.floor(Math.random() * 10000000000000000);
					code.appendChild(document.createTextNode('UID:' + random));
				} else if (el == 'event2') {
					code.appendChild(document.createTextNode('END:VEVENT'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('END:VCALENDAR'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('event.ics').children[1].children[1].appendChild(p); }
			});
			document.getElementById('event-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('event-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('event.ics').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('event.ics').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('event.ics', 'text/calendar', meta );
	},false);
})();
(function feedxml(){
	var typeset; var charset; let button = document.getElementById('feed-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('feed.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading feed.xml'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('feed.xml').children[1].childElementCount == 1) {
			document.getElementById('feed.xml').children[1].appendChild(fieldset);
			document.getElementById('feed.xml').children[1].children[1].appendChild(legend);
			var tag = ['feed-itunes','feed-rss','feed-atom','feed-json'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				var date = new Date(); var year = date.getFullYear();
				if (el == 'feed-itunes' && document.getElementById('feed-itunes').checked === true) {
					typeset = "application/rss+xml"; charset = "xml";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<channel>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Channel Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<description>Description.</description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<language>en-us</language>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<itunes:category text="Category"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<itunes:explicit>false</itunes:explicit>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<itunes:image href="http://domain.com/artwork.png"/>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Channel Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<copyright>© Copyright Company ' + year + '</copyright>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link>https://domain.com/</link>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<pubDate>Wed, 17 Mar ' + year + ' 19:30:00 GMT</pubDate>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:author>Author</itunes:author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:block>no</itunes:block>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:complete>no</itunes:complete>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:new-feed-url>https://domain.com/example.rss</itunes:new-feed-url>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:owner>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:name>Owner</itunes:name>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:email>email@domain.com</itunes:email>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</itunes:owner>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:title>Title</itunes:title>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:type>Episodic</itunes:type>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<item>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Item Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<enclosure url="https://domain.com/episode1.mp3" length="13475901" type="audio/mp3"/>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Item Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<description>Description.</description>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<guid>https://domain.com/article.html</guid>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:author>Author</itunes:author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:block>no</itunes:block>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:duration>1671</itunes:duration>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:episode>1</itunes:episode>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:episodeType>Full</itunes:episodeType>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:explicit>false</itunes:explicit>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:image href="http://domain.com/artwork.png"/>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:season>1</itunes:season>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<itunes:title>Title</itunes:title>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link>https://domain.com/article.html</link>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<pubDate>Wed, 17 Mar ' + year + ' 19:30:00 GMT</pubDate>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</item>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</channel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rss>'));
				} else if (el == 'feed-rss' && document.getElementById('feed-rss').checked === true) {
					typeset = "application/rss+xml"; charset = "xml";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<channel>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Channel Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link>https://domain.com/</link>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<description>Description.</description>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Channel Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<category>Category</category>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<cloud domain="url.com" port="80" path="RPC2" registerProcedure="pingMe" protocol="soap"/>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<copyright>© Copyright Company ' + year + '</copyright>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<docs>https://domain.com/rss.html</docs>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<generator>Application</generator>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<image>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<title>Title</title>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<url>https://domain.com/image.png</url>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link>https://domain.com/</link>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</image>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<language>en-us</language>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<lastBuildDate>Sun, 19 May ' + year + ' 15:21:36 GMT</lastBuildDate>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link>https://domain.com/</link>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<managingEditor>email@domain.com</managingEditor>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<pubDate>Sun, 19 May ' + year + ' 15:21:36 GMT</pubDate>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<skipDays><day>Monday</day></skipDays>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<skipHours><hour>1</hour></skipHours>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<textInput>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<title>Title</title>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<description>Description</description>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<name>Name</name>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link>https://domain.com/</link>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</textInput>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<ttl>60</ttl>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<webMaster>email@domain.com</webMaster>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<atom:link rel="self" href="https://domain.com/rss.xml" type="application/rss+xml" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<item>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Item Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<description>Description.</description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link>https://domain.com/article.html</link>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Item Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<author>Author</author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<category>Category</category>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<comments>https://domain.com/article.html#comments</comments>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<enclosure url="https://domain.com/episode1.mp3" length="13475901" type="audio/mp3"/>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<guid>https://domain.com/article.html</guid>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<pubDate>Sun, 19 May ' + year + ' 15:21:36 GMT</pubDate>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<source url="http://domain.com/">Source</source>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</item>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</channel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rss>'));
				} else if (el == 'feed-atom' && document.getElementById('feed-atom').checked === true) {
					typeset = "application/atom+xml"; charset = "xml";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<feed xmlns="http://www.w3.org/2005/Atom">'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Feed Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<id>https://domain.com/</id>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<updated>' + year + '-06-13T18:30:02Z</updated>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Feed Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<name>Name</name>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<email>email@domain.com</email>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<uri>http://domain.com/</uri>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<category term="Category"/>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<contributor><name>Name</name></contributor>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<generator uri="blog.php" version="1.0">Application</generator>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<icon>images/icon.png</icon>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<logo>images/icon.png</logo>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<rights>© Copyright Company ' + year + '</rights>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<subtitle>Description.</subtitle>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<link rel="self" href="https://domain.com/atom.xml" type="application/atom+xml" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<entry>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Required Entry Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<title>Title</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<updated>' + year + '-06-13T18:30:02Z</updated>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<id>https://domain.com/article.html</id>'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<!-- Optional Entry Elements -->'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<name>Name<name>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<email>email@domain.com</email>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</author>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<category term="Category"/>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<content type="html"><p>Description.</p></content>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<contributor><name>Name</name></contributor>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<link rel="alternate" href="https://domain.com/article.html" />'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<published>' + year + '-06-13T09:17:51-08:00</published>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<rights>© Copyright Company ' + year + '</rights>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<source>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<id>http://domain.com/</id>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<title>Title</title>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<updated>' + year + '-06-13T09:17:51Z</updated>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('</source>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<summary>Summary<summary>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</entry>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</feed>'));
				} else if (el == 'feed-json' && document.getElementById('feed-json').checked === true) {
					typeset = "application/feed+json"; charset = "json";
					code.appendChild(document.createTextNode('{'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"_comment": "Required JSON Elements",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('"version": "https://jsonfeed.org/version/1.1",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"feed_url": "https://domain.com/feed.json",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"home_page_url": "https://domain.com/",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"title": "Title",'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"_comment": "Optional JSON Elements",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"authors": [ { "name": "Name", url": "https://domain.com/", "avatar": "images/avatar.png" } ]'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"description": "Description.",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"expired": "no.",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"favicon": "https://domain.com/avatar.png",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"hubs": [ { "type": "Type", "url": "https://domain.com/" } ]'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"icon": "https://domain.com/avatar.png",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"link": "https://domain.com/",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"next_url": "https://domain.com/",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"rights": "© Copyright Company ' + year + '",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"user_comment": "Feed purpose.",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('"items": ['));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('{'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"_comment": "Required Item Elements",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('"id": "1",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"url": "https://domain.com/article",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"content_html": "<p>Either use content_html or content_text.</p>"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"content_text": "Either use content_html or content_text."'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('feed-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"_comment": "Optional Item Elements",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"attachments": [ { "title": "Title", url": "https://domain.com/episode1.mp3", "mime_type": "audio/mpeg" } ]'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"authors": [ { "name": "Name", url": "https://domain.com/", "avatar": "images/avatar.png" } ]'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"date_modified": "' + year + '-06-13T18:30:02Z",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"date_published": "' + year + '-06-13T18:30:02Z",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"external_url": "https://domain.com/article",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"image": "https://domain.com/image.png",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"language": "en-us",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"summary": "Summary.",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"tags": [ "tag" ]'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"title": "Title",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode(']'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('feed.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('feed.xml').children[1].children[1].appendChild(fieldset2);
			document.getElementById('feed.xml').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="alternate" type="' + typeset + '" href="feed.' + charset +'">'));
			document.getElementById('feed.xml').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('feed-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('feed-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('feed.xml').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('feed.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('feed.' + charset, typeset, meta );
	},false);
})();
(function foafrdf(){
	let button = document.getElementById('foaf-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('foaf.rdf').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading foaf.rdf'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('foaf.rdf').children[1].childElementCount == 1) {
			document.getElementById('foaf.rdf').children[1].appendChild(fieldset);
			document.getElementById('foaf.rdf').children[1].children[1].appendChild(legend);
			var tag = ['foaf','foaf-name','foaf-homepage', 'foaf-img','foaf-email','foaf-jabber','foaf-based','foaf-made','foaf-account','foaf-category','foaf-age','foaf-relation','foaf-openid','foaf-sha1','foaf2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				var typeset;
				const foaf = ['foaf-agent','foaf-person','foaf-organization','foaf-group','foaf-project'];
				for (const elem of foaf) {
					if (document.getElementById(elem).checked) { typeset = document.getElementById(elem).value } }
				if (el == 'foaf') {
					code.appendChild(document.createTextNode('<foaf:' + typeset +' rdf:about="#Name" xmlns:foaf="http://xmlns.com/foaf/0.1/">'));
				} else if (el == 'foaf-name' && document.getElementById('foaf-name').checked === true) {
					code.appendChild(document.createTextNode('<foaf:name>Name</foaf:name>'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:familyName>Surname</foaf:familyName>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:givenName>FirstName</foaf:givenName>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:nick>Nickname</foaf:nick>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:title>Ms</foaf:title>'));
					}
				} else if (el == 'foaf-homepage' && document.getElementById('foaf-homepage').checked === true) {
					code.appendChild(document.createTextNode('<foaf:homepage rdf:resource="https://domain.com/">'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:interest rdf:resource="https://domain.com/hobbies/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:publications rdf:resource="https://domain.com/publications/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:schoolHomepage rdf:resource="https://domain.com/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:tipjar rdf:resource="https://domain.com/donate/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:weblog rdf:resource="https://domain.com/blog/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:workInfoHomepage rdf:resource="https://domain.com/portfolio/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:workplaceHomepage rdf:resource="https://domain.com/">'));
					}
				} else if (el == 'foaf-img' && document.getElementById('foaf-img').checked === true) {
					code.appendChild(document.createTextNode('<foaf:logo rdf:resource="https://domain.com/images/image.png">'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:img rdf:resource="https://domain.com/images/image.png">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:thumbnail rdf:resource="https://domain.com/images/image.png">'));
					}
				} else if (el == 'foaf-email' && document.getElementById('foaf-email').checked === true) {
					code.appendChild(document.createTextNode('<foaf:mbox>email@domain.com</foaf:mbox>'));
				} else if (el == 'foaf-jabber' && document.getElementById('foaf-jabber').checked === true) {
					code.appendChild(document.createTextNode('<foaf:jabberID>ID</foaf:jabberID>'));
				} else if (el == 'foaf-based' && document.getElementById('foaf-based').checked === true) {
					code.appendChild(document.createTextNode('<foaf:based_near>Location</foaf:based_near>'));
				} else if (el == 'foaf-made' && document.getElementById('foaf-made').checked === true) {
					code.appendChild(document.createTextNode('<foaf:made rdf:resource="https://domain.com/">'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:currentProject rdf:resource="https://domain.com/">'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:pastProject rdf:resource="https://domain.com/">'));
					}
				} else if (el == 'foaf-account' && document.getElementById('foaf-account').checked === true) {
					code.appendChild(document.createTextNode('<foaf:account>Account</foaf:account>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<foaf:accountName>Name</foaf:accountName>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<foaf:accountServiceHomepage rdf:resource="https://domain.com/">'));
				} else if (el == 'foaf-category' && document.getElementById('foaf-category').checked === true) {
					code.appendChild(document.createTextNode('<foaf:topic>Category</foaf:topic>'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:primaryTopic>Primary</foaf:primaryTopic>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:topic_interest>Interest</foaf:topic_interest>'));
					}
				} else if (el == 'foaf-age' && document.getElementById('foaf-age').checked === true) {
					code.appendChild(document.createTextNode('<foaf:age>Age</foaf:age>'));
				} else if (el == 'foaf-relation' && document.getElementById('foaf-relation').checked === true) {
					code.appendChild(document.createTextNode('<foaf:knows rdf:resource="https://domain.com/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<foaf:member rdf:resource="https://domain.com/">'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:depiction rdf:resource="https://domain.com/connection">'));
					}
				} else if (el == 'foaf-openid' && document.getElementById('foaf-openid').checked === true) {
					code.appendChild(document.createTextNode('<foaf:openid rdf:resource="https://domain.com/">'));
				} else if (el == 'foaf-sha1' && document.getElementById('foaf-sha1').checked === true) {
					code.appendChild(document.createTextNode('<foaf:sha1>General</foaf:sha1>'));
					if (document.getElementById('foaf-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<foaf:mbox_sha1sum>Email</foaf:mbox_sha1sum>'));
					}
				} else if (el == 'foaf2') {
					code.appendChild(document.createTextNode('</foaf:' + typeset +'>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('foaf.rdf').children[1].children[1].appendChild(p); }
			});
			document.getElementById('foaf.rdf').children[1].children[1].appendChild(fieldset2);
			document.getElementById('foaf.rdf').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="author" type="application/rdf+xml" href="foaf.rdf">'));
			document.getElementById('foaf.rdf').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('foaf-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('foaf-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('foaf.rdf').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('foaf.rdf').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('foaf.rdf', 'application/rdf+xml', meta );
	},false);
})();
(function geordf(){
	var typeset; var charset; let button = document.getElementById('geo-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('geo.rdf').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading geo.rdf'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('geo.rdf').children[1].childElementCount == 1) {
			document.getElementById('geo.rdf').children[1].appendChild(fieldset);
			document.getElementById('geo.rdf').children[1].children[1].appendChild(legend);
			var tag = ['geo','geo-rdf','geo-kml'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'geo') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
				} else if (el == 'geo-rdf' && document.getElementById('geo-rdf').checked === true) {
					typeset = "application/rdf+xml"; charset = "rdf";
					code.appendChild(document.createTextNode('<rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdf:Description rdf:about="https://domain.com">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dc:title>Location</dc:title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dc:description>Description</dc:description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<foaf:topic rdf:parseType="Resource">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<geo:lat>00.000000</geo:lat>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<geo:long>-0.00000</geo:long>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</foaf:topic>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rdf:Description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rdf:RDF>'));
				} else if (el == 'geo-kml' && document.getElementById('geo-kml').checked === true) {
					typeset = "application/vnd.google-earth.kml+xml"; charset = "kml";
					code.appendChild(document.createTextNode('<kml xmlns="http://www.opengis.net/kml/2.2">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Document>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<name>Location</name>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<description>Description</description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Style id="pin"><IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href></Icon></IconStyle></Style>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Placemark>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<LookAt>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<longitude>-0.00000</longitude>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<latitude>00.000000</latitude>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<altitude>0</altitude>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<tilt>0</tilt>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<range>5500</range>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</LookAt>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<styleUrl>#pin</styleUrl>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Point><coordinates>-0.00000,00.000000,0</coordinates></Point>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</Placemark>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</Document>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</kml>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('geo.rdf').children[1].children[1].appendChild(p); }
			});
			document.getElementById('geo.rdf').children[1].children[1].appendChild(fieldset2);
			document.getElementById('geo.rdf').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="author" type="' + typeset + '" href="geo.' + charset + '">'));
			document.getElementById('geo.rdf').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('geo-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('geo-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('geo.rdf').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('geo.rdf').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('geo.' + charset, typeset, meta );
	},false);
})();
(function humanstxt(){
	let button = document.getElementById('humans-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('humans.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading humans.txt'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('humans.txt').children[1].childElementCount == 1) {
			var credit = false; var site = false; document.getElementById('humans.txt').children[1].appendChild(fieldset);
			document.getElementById('humans.txt').children[1].children[1].appendChild(legend);
			var tag = ['humans','humans-team','humans-thanks','humans-license','humans-visitor','humans-languages','humans-standards','humans-components','humans-software','humans-services','humans-support','humans-updated'];
			if ((document.getElementById('humans-thanks').checked === true || document.getElementById('humans-license').checked === true || document.getElementById('humans-visitor').checked === true) && credit === false) { credit = true; }
			if ((document.getElementById('humans-languages').checked === true || document.getElementById('humans-standards').checked === true || document.getElementById('humans-components').checked === true || document.getElementById('humans-software').checked === true || document.getElementById('humans-services').checked === true || document.getElementById('humans-support').checked === true || document.getElementById('humans-updated').checked === true) && site === false) { site = true; }
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'humans') {
					code.appendChild(document.createTextNode('/* ----------------------- */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Product Website Credits */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* ----------------------- */'));
				} else if (el == 'humans-team' && document.getElementById('humans-team').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* TEAM */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Title: Name'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Position: Job Title'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Site: https://domain.com'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Twitter: @TwitterID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Location: Region, Country'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Contact: email@domain.com'));
				} else if (credit === true) {
					credit = false;
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* THANKS */'));
				} else if (el == 'humans-thanks' && document.getElementById('humans-thanks').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Title: Name'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Twitter: @TwitterID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Site: https://domain.com'));
				} else if (el == 'humans-license' && document.getElementById('humans-license').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Title: Name'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('License: https://domain.com/license.txt'));
				} else if (el == 'humans-visitor' && document.getElementById('humans-visitor').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* You for visiting this website! */'));
				} else if (site === true) {
					site = false;
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* SITE */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
				} if (el == 'humans-languages' && document.getElementById('humans-languages').checked === true) {
					code.appendChild(document.createTextNode('Language: English (US)'));
				} if (el == 'humans-standards' && document.getElementById('humans-standards').checked === true) {
					code.appendChild(document.createTextNode('Standards: TXT, HTML, CSS, JS'));
				} if (el == 'humans-components' && document.getElementById('humans-components').checked === true) {
					code.appendChild(document.createTextNode('Components: None'));
				} if (el == 'humans-software' && document.getElementById('humans-software').checked === true) {
					code.appendChild(document.createTextNode('Software: None'));
				} if (el == 'humans-services' && document.getElementById('humans-services').checked === true) {
					code.appendChild(document.createTextNode('Services: Font (Typeface), Name (Icons), Hosting, Domains'));
				} if (el == 'humans-support' && document.getElementById('humans-support').checked === true) {
					code.appendChild(document.createTextNode('Testing: Chrome (Mac/PC), Firefox (Mac/PC), Safari (Mac/iOS), IE (11+)'));
				} if (el == 'humans-updated' && document.getElementById('humans-updated').checked === true) {
					var date = new Date().toISOString().substr(0, 19);
					code.appendChild(document.createTextNode('Updated: ' + date.replace('T',' ')));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('humans.txt').children[1].children[1].appendChild(p); }
			});
			document.getElementById('humans.txt').children[1].children[1].appendChild(fieldset2);
			document.getElementById('humans.txt').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="author" type="text/plain" href="humans.txt">'));
			document.getElementById('humans.txt').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('humans-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('humans-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('humans.txt').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('humans.txt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('humans.txt', 'text/plain', meta );
	},false);
})();
(function indexhtml(){
	let button = document.getElementById('index-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('index.html').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading index.html.'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('index.html').children[1].childElementCount == 1) {
			document.getElementById('index.html').children[1].appendChild(fieldset);
			document.getElementById('index.html').children[1].children[1].appendChild(legend);
			var tag = ['index'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'index') {
					code.appendChild(document.createTextNode('<!DOCTYPE html>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<html lang="en">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta charset="utf-8">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="viewport" content="width=device-width, initial-scale=1">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<title>Title - Subtitle</title>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<meta name="description" content="Description.">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<link rel="stylesheet" href="assets/styles.css">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<script async src="assets/script.js"></script>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<header>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h1>Logo</h1>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<nav>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<ul>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<li>Articles</li>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<li>Work</li>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<li>Info</li>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</ul>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</nav>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</header>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<main>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<article>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>Section</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Content</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<article>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<h2>Section</h2>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Content</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</article>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<footer>'));
					code.appendChild(document.createElement('br'));
					var date = new Date(); var year = date.getFullYear();
					code.appendChild(document.createTextNode('<p>Copyright, ' + year +'</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<p>Built by <a href="#">Your Name</a>.</p>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</footer>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</html>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('index.html').children[1].children[1].appendChild(p); }
			});
			document.getElementById('index-generate').classList.replace('show','hide');
			document.getElementById('index-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('index-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('index.html').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('index.html').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('index.html', 'text/html', meta );
	},false);
})();
(function legaltxt(){
	let button = document.getElementById('legal-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('legal.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading legal.txt'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('legal.txt').children[1].childElementCount == 1) {
			document.getElementById('legal.txt').children[1].appendChild(fieldset);
			document.getElementById('legal.txt').children[1].children[1].appendChild(legend);
			var tag = ['ads','legal-apache','legal-gpl3', 'legal-mit','legal-cc','legal-blueoak','legal-hippocratic',
			'legal-tos','legal-impressum','legal-a11y','legal-privacy'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'ads') {
					code.appendChild(document.createTextNode('# legal.txt - Below Are A Selection Of URLs Based On Your Choices'));
				} else if (el == 'legal-apache' && document.getElementById('legal-apache').checked === true) {
					code.appendChild(document.createTextNode('Apache 2.0 License: https://www.apache.org/licenses/LICENSE-2.0'));
				} else if (el == 'legal-gpl3' && document.getElementById('legal-gpl3').checked === true) {
					code.appendChild(document.createTextNode('GNU GPL v3 License: https://www.gnu.org/licenses/gpl-3.0.en.html'));
				} else if (el == 'legal-mit' && document.getElementById('legal-mit').checked === true) {
					code.appendChild(document.createTextNode('MIT License: https://opensource.org/licenses/MIT'));
				} else if (el == 'legal-cc' && document.getElementById('legal-cc').checked === true) {
					code.appendChild(document.createTextNode('Creative Commons License: https://creativecommons.org/choose/ (Pick One)'));
				} else if (el == 'legal-blueoak' && document.getElementById('legal-blueoak').checked === true) {
					code.appendChild(document.createTextNode('Blue Oak License: https://blueoakcouncil.org/license/1.0.0'));
				} else if (el == 'legal-hippocratic' && document.getElementById('legal-hippocratic').checked === true) {
					code.appendChild(document.createTextNode('Hippocratic License: https://firstdonoharm.dev/version/2/1/license/'));
				} else if (el == 'legal-tos' && document.getElementById('legal-tos').checked === true) {
					code.appendChild(document.createTextNode('Terms Of Service: https://www.pandadoc.com/website-standard-terms-and-conditions-template/ (Template)'));
				} else if (el == 'legal-impressum' && document.getElementById('legal-impressum').checked === true) {
					code.appendChild(document.createTextNode('Impressum: https://www.linkedin.com/pulse/what-impressum-why-does-facebook-want-one-chris-bangs (Template)'));
				} else if (el == 'legal-a11y' && document.getElementById('legal-a11y').checked === true) {
					code.appendChild(document.createTextNode('Accessibility Statement: https://www.w3.org/WAI/planning/statements/ (Template)'));
				} else if (el == 'legal-privacy' && document.getElementById('legal-privacy').checked === true) {
					code.appendChild(document.createTextNode('Privacy Policy: https://www.freeprivacypolicy.com/ (Choose One)'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('GDPR Checklist: https://gdprchecklist.io/ (Template)'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('legal.txt').children[1].children[1].appendChild(p); }
			}); }
		return false; }, false);
})();
(function listopml(){
	let button = document.getElementById('list-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('list.opml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading list.opml'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('list.opml').children[1].childElementCount == 1) {
			document.getElementById('list.opml').children[1].appendChild(fieldset);
			document.getElementById('list.opml').children[1].children[1].appendChild(legend);
			var tag = ['list','list-owner','list-date','list-docs','list-state','list-window','list2','list-music','list-links','list3'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'list') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<opml version="1.0">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<title>Title</title>'));
				} else if (el == 'list-owner' && document.getElementById('list-owner').checked === true) {
					code.appendChild(document.createTextNode('<ownerName>Name</ownerName>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<ownerEmail>email@domain.com</ownerEmail>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<ownerId>https://domain.com</ownerId>'));
				} else if (el == 'list-date' && document.getElementById('list-date').checked === true) {
					var date = new Date(); var year = date.getFullYear();
					code.appendChild(document.createTextNode('<dateCreated>Thu, 13 Oct ' + year + ' 15:34:07 GMT</dateCreated>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dateModified>Tue, 25 Oct ' + year + ' 21:33:57 GMT</dateModified>'));
				} else if (el == 'list-docs' && document.getElementById('list-docs').checked === true) {
					code.appendChild(document.createTextNode('<docs>http://dev.opml.org/spec2.html</docs>'));
				} else if (el == 'list-state' && document.getElementById('list-state').checked === true) {
					code.appendChild(document.createTextNode('<expansionState></expansionState>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<vertScrollState>1</vertScrollState>'));
				} else if (el == 'list-window' && document.getElementById('list-window').checked === true) {
					code.appendChild(document.createTextNode('<windowTop></windowTop>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<windowLeft></windowLeft>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<windowBottom></windowBottom>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<windowRight></windowRight>'));
				} else if (el == 'list2') {
					code.appendChild(document.createTextNode('</head>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<outline text="Category">'));
				} else if (el == 'list-music' && document.getElementById('list-music').checked === true) {
					code.appendChild(document.createTextNode('<outline text="Song.mp3" type="song" f="Artist - Song.mp3"/>'));
				} else if (el == 'list-links' && document.getElementById('list-links').checked === true) {
					code.appendChild(document.createTextNode('<outline text="Useful Website" type="link" url="https://domain.com"/>'));
				} else if (el == 'list3') {
					code.appendChild(document.createTextNode('</outline>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</body>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</opml>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('list.opml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('list.opml').children[1].children[1].appendChild(fieldset2);
			document.getElementById('list.opml').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="alternate" type="application/text+xml" href="list.opml">'));
			document.getElementById('list.opml').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('list-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('list-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('list.opml').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('list.opml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('list.opml', 'application/text+xml', meta );
	},false);
})();
(function modescss(){
	let button = document.getElementById('modes-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('modes.css').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading modes.css'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('modes.css').children[1].childElementCount == 1) {
			document.getElementById('modes.css').children[1].appendChild(fieldset);
			document.getElementById('modes.css').children[1].children[1].appendChild(legend);
			var tag = ['modes','modes-invert','modes-light','modes-pixel','modes-monochrome','modes-pointer','modes-dark','modes-motion','modes-contrast','modes-data','modes-transparency','modes-fold'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'modes') {
					code.appendChild(document.createTextNode('/* modes.css - Media Queries for this Website */'));
				} else if (el == 'modes-invert' && document.getElementById('modes-invert').checked === true) {
					code.appendChild(document.createTextNode('@media (inverted-colors: none) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (inverted-colors: inverted) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-light' && document.getElementById('modes-light').checked === true) {
					code.appendChild(document.createTextNode('@media (light-level: washed) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (light-level: normal) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (light-level: dim) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-pixel' && document.getElementById('modes-pixel').checked === true) {
					code.appendChild(document.createTextNode('@media (min-resolution: 1x), (-webkit-min-device-pixel-ratio: 1) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (min-resolution: 2x), (-webkit-min-device-pixel-ratio: 2) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-monochrome' && document.getElementById('modes-monochrome').checked === true) {
					code.appendChild(document.createTextNode('@media (color) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (monochrome) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-pointer' && document.getElementById('modes-pointer').checked === true) {
					code.appendChild(document.createTextNode('@media (hover: none) and (pointer: coarse) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Touchscreen */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (hover: none) and (pointer: fine) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Stylus */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (hover: hover) and (pointer: coarse) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Controller */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (hover: hover) and (pointer: fine) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Normal */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-dark' && document.getElementById('modes-dark').checked === true) {
					code.appendChild(document.createTextNode('@media (prefers-color-scheme: dark) {'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('modes-boilerplate').checked === true) {
						code.appendChild(document.createTextNode(':root {'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('background: #101010;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('filter: invert(1) hue-rotate(180deg); }'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('canvas, img, video {'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('filter: invert(1) hue-rotate(180deg); }'));
					}
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (prefers-color-scheme: light) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-motion' && document.getElementById('modes-motion').checked === true) {
					code.appendChild(document.createTextNode('@media (prefers-reduced-motion: reduce) {'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('modes-boilerplate').checked === true) {
						code.appendChild(document.createTextNode('*:not(.safe-animation),'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('*:not(.safe-animation)::before,'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('*:not(.safe-animation)::after {'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('animation-delay: -1ms !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('animation-duration: 1ms !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('animation-iteration-count: 1 !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('background-attachment: initial !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('scroll-behavior: auto !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('transition-delay: -1ms !important;'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('transition-duration: 1ms !important; }'));
					}
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (prefers-reduced-motion: no-preference) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-contrast' && document.getElementById('modes-contrast').checked === true) {
					code.appendChild(document.createTextNode('/* Upcoming */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (forced-colors: none) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (forced-colors: active) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Safari */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (prefers-contrast: more) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (prefers-contrast: less) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('/* Microsoft Edge */'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (-ms-high-contrast: active) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (-ms-high-contrast: black-on-white) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (-ms-high-contrast: white-on-black) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-data' && document.getElementById('modes-data').checked === true) {
					code.appendChild(document.createTextNode('@media (prefers-reduced-data: reduce) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-transparency' && document.getElementById('modes-transparency').checked === true) {
					code.appendChild(document.createTextNode('@media (prefers-reduced-transparency: reduce) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (prefers-reduced-transparency: no-preference) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'modes-fold' && document.getElementById('modes-fold').checked === true) {
					code.appendChild(document.createTextNode('@media (screen-spanning: single-fold-horizontal) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (screen-spanning: single-fold-vertical) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('modes.css').children[1].children[1].appendChild(p); }
			});
			document.getElementById('modes.css').children[1].children[1].appendChild(fieldset2);
			document.getElementById('modes.css').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="stylesheet" href="assets/modes.css">'));
			document.getElementById('modes.css').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('modes-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('modes-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('modes.css').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('modes.css').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('modes.css', 'text/css', meta );
	},false);
})();
(function opensearchxml(){
	let button = document.getElementById('opensearch-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('opensearch.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading opensearch.xml'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('opensearch.xml').children[1].childElementCount == 1) {
			document.getElementById('opensearch.xml').children[1].appendChild(fieldset);
			document.getElementById('opensearch.xml').children[1].children[1].appendChild(legend);
			var tag = ['opensearch','opensearch-google','opensearch-adult','opensearch-copyright','opensearch-contact','opensearch-name','opensearch-icon','opensearch-input','opensearch-language','opensearch-longtitle','opensearch-output','opensearch-query','opensearch-syndicate','opensearch-tags','opensearch2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'opensearch') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<ShortName>Title</ShortName>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Description>Description.</Description>'));
				} else if (el == 'opensearch-google' && document.getElementById('opensearch-google').checked === true) {
					code.appendChild(document.createTextNode('<Url type="text/html" template="http://www.google.com/search?sitesearch=https%3A%2F%2Fdomain.com%2F&amp;as_q={searchTerms}"/>'));
				} else if (el == 'opensearch-google' && document.getElementById('opensearch-google').checked === false) {
					code.appendChild(document.createTextNode('<Url type="text/html" template="http://domain.com/search?q={searchTerms}&amp;pw={startPage?}"/>'));
				} else if (el == 'opensearch-adult' && document.getElementById('opensearch-adult').checked === true) {
					code.appendChild(document.createTextNode('<AdultContent>false</AdultContent>'));
				} else if (el == 'opensearch-copyright' && document.getElementById('opensearch-copyright').checked === true) {
					var date = new Date(); var year = date.getFullYear();
					code.appendChild(document.createTextNode('<Attribution>© Copyright Company, ' + year + '</Attribution>'));
				} else if (el == 'opensearch-contact' && document.getElementById('opensearch-contact').checked === true) {
					code.appendChild(document.createTextNode('<Contact>email@domain.com</Contact>'));
				} else if (el == 'opensearch-name' && document.getElementById('opensearch-name').checked === true) {
					code.appendChild(document.createTextNode('<Developer>Name</Developer>'));
				} else if (el == 'opensearch-icon' && document.getElementById('opensearch-icon').checked === true) {
					code.appendChild(document.createTextNode('<Image height="16" width="16" type="image/x-icon">favicon.ico</Image>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<Image height="64" width="64" type="image/png">assets/icon.png</Image>'));
				} else if (el == 'opensearch-input' && document.getElementById('opensearch-input').checked === true) {
					code.appendChild(document.createTextNode('<InputEncoding>UTF-8</InputEncoding>'));
				} else if (el == 'opensearch-language' && document.getElementById('opensearch-language').checked === true) {
					code.appendChild(document.createTextNode('<Language>en-us</Language>'));
				} else if (el == 'opensearch-longtitle' && document.getElementById('opensearch-longtitle').checked === true) {
					code.appendChild(document.createTextNode('<LongName>Title</LongName>'));
				} else if (el == 'opensearch-output' && document.getElementById('opensearch-output').checked === true) {
					code.appendChild(document.createTextNode('<OutputEncoding>UTF-8</OutputEncoding>'));
				} else if (el == 'opensearch-query' && document.getElementById('opensearch-query').checked === true) {
					code.appendChild(document.createTextNode('<Query role="Example" searchTerms="Category" />'));
				} else if (el == 'opensearch-syndicate' && document.getElementById('opensearch-syndicate').checked === true) {
					code.appendChild(document.createTextNode('<SyndicationRight>open</SyndicationRight>'));
				} else if (el == 'opensearch-tags' && document.getElementById('opensearch-tags').checked === true) {
					code.appendChild(document.createTextNode('<Tags>TagA TagB</Tags>'));
				} else if (el == 'opensearch2') {
					code.appendChild(document.createTextNode('</OpenSearchDescription>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('opensearch.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('opensearch.xml').children[1].children[1].appendChild(fieldset2);
			document.getElementById('opensearch.xml').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="search" type="application/opensearchdescription+xml" href="opensearch.xml">'));
			document.getElementById('opensearch.xml').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('opensearch-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('opensearch-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('opensearch.xml').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('opensearch.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('opensearch.xml', 'application/opensearchdescription+xml', meta );
	},false);
})();
(function p3pxml(){
	let button = document.getElementById('p3p-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('p3p.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading p3p.xml'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('p3p.xml').children[1].childElementCount == 1) {
			document.getElementById('p3p.xml').children[1].appendChild(fieldset);
			document.getElementById('p3p.xml').children[1].children[1].appendChild(legend);
			var tag = ['p3p'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'p3p') {
					code.appendChild(document.createTextNode('<META xmlns="http://www.w3.org/2002/01/P3Pv1">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<POLICY-REFERENCES>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<EXPIRY max-age="172800"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<POLICY-REF about="/P3P/Policies.xml#first">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<INCLUDE>/*</INCLUDE>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<EXCLUDE>/cgi-bin/*</EXCLUDE>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</POLICY-REF>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</POLICY-REFERENCES>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</META>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('p3p.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('p3p.xml').children[1].children[1].appendChild(fieldset2);
			document.getElementById('p3p.xml').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="P3Pv1" type="text/xml" href="p3p.xml">'));
			document.getElementById('p3p.xml').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('p3p-generate').classList.replace('show','hide');
			document.getElementById('p3p-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('p3p-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('p3p.xml').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('p3p.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('p3p.xml', 'text/xml', meta );
	},false);
})();
(function powderxml(){
	var typeset; var filename; let button = document.getElementById('powder-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('powder.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading powder.xml'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('powder.xml').children[1].childElementCount == 1) {
			document.getElementById('powder.xml').children[1].appendChild(fieldset);
			document.getElementById('powder.xml').children[1].children[1].appendChild(legend);
			var tag = ['powder-xml','powder-rdf'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'powder-xml' && document.getElementById('powder-xml').checked === true) {
					typeset = "application/powder+xml"; filename = "powder.xml";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8?">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<powder xmlns="http://www.w3.org/2007/05/powder#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:icra="http://www.icra.org/rdfs/vocabulary2008#">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<attribution>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<issuedby src="http://authority.domain.com/company.rdf#me" />'));
					code.appendChild(document.createElement('br'));
					var time = new Date().toISOString().substr(0, 19);
					code.appendChild(document.createTextNode('<issued>' + time + '</issued>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<certifiedby src="http://independent.website.com?verify=http%3A%2F%2Fdomain.com%2Fpowder.xml" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</attribution>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<ol>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dr>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<iriset>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<includehosts>domain.com</includehosts>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<includepathstartswith>/path</includepathstartswith>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</iriset>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<descriptorset>'));
					code.appendChild(document.createElement('br'));
					const icra = ['icra-nudity','icra-sexual','icra-violence','icra-language','icra-harmful','icra-user'];
					for (const elem of icra) {
						let label = document.getElementById(elem).value
						code.appendChild(document.createTextNode('<icra:' + label + '</icra:' + label.slice(0, -2) + '>'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('<displaytext>Description.</displaytext>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</descriptorset>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</dr>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</ol>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</powder>'));
				} else if (el == 'powder-rdf' && document.getElementById('powder-rdf').checked === true) {
					typeset = "application/rdf+xml"; filename = "PICS.rdf";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:label="http://www.w3.org/2004/12/q/contentlabel#" xmlns:icra="http://www.icra.org/rdfs/vocabularyv03#" xmlns:rsac="http://www.icra.org/rdfs/vocabularyv01#"  xmlns:ss="http://www.safesurf.com/ssplan/" xmlns:sfk="http://www.weburbia.com/safe/ratings/ ">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdf:Description rdf:about="">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dc:creator rdf:resource="http://www.icra.org" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dc:creator rdf:resource="http://www.safesurf.com" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<dc:creator rdf:resource="http://www.weburbia.com/safe" />'));
					code.appendChild(document.createElement('br'));
					var date = new Date().toISOString().substr(0, 10);
					code.appendChild(document.createTextNode('<dcterms:issued>' + date + '</dcterms:issued>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:authorityFor>http://www.icra.org/rdfs/vocabularyv03#</label:authorityFor>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rdf:Description>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:Ruleset>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:hasHostRestrictions><label:Hosts><label:hostRestriction>domain.com</label:hostRestriction></label:Hosts></label:hasHostRestrictions>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:hasDefaultLabel rdf:resource="#label_1" />'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</label:Ruleset>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:ContentLabel rdf:ID="label_1">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdfs:comment>ICRA Ratings</rdfs:comment>'));
					code.appendChild(document.createElement('br'));
					const icra = ['icra-nudity','icra-sexual','icra-violence','icra-language','icra-harmful','icra-user'];
					for (const elem of icra) {
						let label = document.getElementById(elem).value
						code.appendChild(document.createTextNode('<icra:' + label + '</icra:' + label.slice(0, -2) + '>'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</label:ContentLabel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:ContentLabel rdf:ID="label_2">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdfs:comment>RSAC Ratings</rdfs:comment>'));
					code.appendChild(document.createElement('br'));
					const rsac = ['rsac-nudity','rsac-sexual','rsac-violence','rsac-language','rsac-tobacco','rsac-alcohol','rsac-drug','rsac-weapon','rsac-gambling','rsac-example','rsac-scary','rsac-discrimination','rsac-user'];
					for (const elem of rsac) {
						let label = document.getElementById(elem).value
						code.appendChild(document.createTextNode('<rsac:' + label + '</rsac:' + label.slice(0, -2) + '>'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</label:ContentLabel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:ContentLabel rdf:ID="label_3">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdfs:comment>SafeSurf Ratings</rdfs:comment>'));
					code.appendChild(document.createElement('br'));
					const ss = ['ss-age','ss-profanity','ss-sexual','ss-nudity','ss-violence','ss-intolerance','ss-drugs','ss-adult'];
					for (const elem of ss) {
						let label = document.getElementById(elem).value
						code.appendChild(document.createTextNode('<ss:ss' + label + '</ss:ss' + label.slice(0, -2) + '>'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</label:ContentLabel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<label:ContentLabel rdf:ID="label_4">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<rdfs:comment>WebUrbia Ratings</rdfs:comment>'));
					code.appendChild(document.createElement('br'));
					const w = ['w-rating'];
					for (const elem of w) {
						let label = document.getElementById(elem).value
						code.appendChild(document.createTextNode('<SFK:' + label + '</SFK:S>'));
						code.appendChild(document.createElement('br'));
					}
					code.appendChild(document.createTextNode('</label:ContentLabel>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</rdf:RDF>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('powder.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('powder.xml').children[1].children[1].appendChild(fieldset2);
			document.getElementById('powder.xml').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="author" type="' + typeset + '" href="' + filename + '">'));
			document.getElementById('powder.xml').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('powder-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('powder-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('powder.xml').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('powder.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('geo.' + filename, typeset, meta );
	},false);
})();
(function printcss(){
	let button = document.getElementById('print-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('print.css').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading print.css'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('print.css').children[1].childElementCount == 1) {
			document.getElementById('print.css').children[1].appendChild(fieldset);
			document.getElementById('print.css').children[1].children[1].appendChild(legend);
			var tag = ['print','print-reset','print-minimal','print-url','print-cover','print-hide','print-dark','print-filter','print-img','print-break','print-paper','print2', 'print-paper2','print-column','print-chrome'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'print') {
					code.appendChild(document.createTextNode('@media print {'));
				} else if (el == 'print-reset' && document.getElementById('print-reset').checked === true) {
					code.appendChild(document.createTextNode('* { margin: 0; padding: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('body { background-color: #ffffff; color: #000000; font-family: Constantia, Palatino, \'Book Antiqua\', \'Palatino Linotype\', serif; line-height: 1.5; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote code { border: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote, code, kbd, pre { border: 1px solid grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('table, td, th { border-bottom: 1px solid black; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('abbr[title], acronym[title] { border-bottom: 1px dotted grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('table { border-collapse: collapse; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('aside { border-left: 2px solid grey; padding-left: 1em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('del, s { color: grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a, canvas, img { color: inherit; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote:after { content: attr(cite); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('dt:after { content: ":"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('abbr:after, acronym:after { content: " (" attr(title) ")"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('data:after { content: " (" attr(value) ")"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('time:after { content: " (" attr(datetime) ")"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('q:after { content: "\\201D" " (" attr(cite) ")"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('canvas, html:after, img, picture { display: block; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('applet, audio, blink, dialog, embed, form, iframe, map, map + img, marquee, menu, nav, object, video { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('code, kbd, pre, samp, tt, var { font-family: \'Courier New\', Courier, \'Lucida Sans Typewriter\', \'Lucida Typewriter\', monospace; font-size: 0.8em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h1 { font-size: 3rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h2 { font-size: 2rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h3 { font-size: 1.75rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h4 { font-size: 1.5rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h5 { font-size: 1.25rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h6 { font-size: 1rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote:after, q:after { font-size: 0.75em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('caption, figcaption { font-style: italic; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('dt { font-weight: bold; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('pre { height: auto; hyphens: auto; overflow: auto; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('h1, h2, h3, h4, h5, h6 { margin: 1rem 0; page-break-after: avoid; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('canvas, img, svg { margin: 1em auto; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('address, blockquote, details, dl, figure, ol, p, pre, ruby, table, ul { margin: 1em 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('dd, ul, ol { margin-left: 2em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote p { margin-top: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('img { border: 0; max-width: 50vw; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('p, pre, table { orphans: 4; widows: 4; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('td, th { padding: 0.1em 0.2em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('code, kbd { padding: 0.2em 0.3em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote, pre { padding: 0.5em 1em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html { padding: 2em 4em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('article { page-break-before: always; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a, blockquote, canvas, details, dl, figure, img, ol, picture, svg, table, ul { break-inside: avoid; page-break-inside: avoid; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('canvas, figure, h1, html:after, img, picture, svg, table { text-align: center; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a, abbr, acronym, ins { text-decoration: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('u { text-decoration-style: wavy; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('table { width: 100%; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a, blockquote:after, pre, q:after { word-wrap: break-word; }'));
				} else if (el == 'print-minimal' && document.getElementById('print-minimal').checked === true) {
					code.appendChild(document.createTextNode('html[data-theme=print-min] mark { background-color: transparent; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] abbr, html[data-theme=print-min] acronym, html[data-theme=print-min] aside, html[data-theme=print-min] blockquote, html[data-theme=print-min] code, html[data-theme=print-min] kbd, html[data-theme=print-min] pre, html[data-theme=print-min] table, html[data-theme=print-min] td, html[data-theme=print-min] th { border: 0; padding: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] a:not(:local-link):after { content: ""; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] a[href^=\'http\']:after, html[data-theme=print-min] a[href^=\'ftp\']:after { content: ""; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] blockquote:after, html[data-theme=print-min] q:after { content: ""; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] canvas, html[data-theme=print-min] img, html[data-theme=print-min] svg { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h1 { font-size: 2rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h2 { font-size: 1.8rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h3 { font-size: 1.6rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h4 { font-size: 1.4rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h5 { font-size: 1.2rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h6 { font-size: 1rem; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] h1, html[data-theme=print-min] h2, html[data-theme=print-min] h3, html[data-theme=print-min] h4, html[data-theme=print-min] h5, html[data-theme=print-min] h6 { margin: 0.5rem 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] body { line-height: 1.2; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-theme=print-min] { padding: 1em 2em; }'));
				} else if (el == 'print-url' && document.getElementById('print-url').checked === true) {
					code.appendChild(document.createTextNode('$a:after > img { content: ""; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="#"]:after, a[href^="javascript:"]:after { content: ""; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a:not(:local-link):after { content:" <" attr(href) "> "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="http"]:after, a[href^="ftp"]:after { content: ": " attr(href); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="mailto"]:before, a[href^="message"]:before { content: "Email: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="maps"]:before { content: "Maps: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="webcal"]:before { content: "Calendar: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="tel"]:before, a[href^="facetime"]:before, a[href^="facetime-audio"]:before, a[href^="sms"]:before, a[href^="irc"]:before, a[href^="skype"]:before, a[href^="whatsapp"]:before, a[href^="fb-messenger"]:before, a[href^="signal"]:before { content: "Contact: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="twitter"]:before, a[href^="fb"]:before, a[href^="snapchat"]:before, a[href^="instagram"]:before { content: "Social: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href^="spotify"]:before, a[href^="music"]:before, a[href^="feed"]:before, a[href^="podcast"]:before { content: "Media: "; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".zip"]:after, a[href$=".rar"]:after, a[href$=".7z"]:after { content: " (Archive)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".mp3"]:after, a[href$=".m4a"]:after, a[href$=".mp4"]:after, a[href$=".aac"]:after, a[href$=".flac"]:after, a[href$=".ogg"]:after, a[href$=".oga"]:after, a[href$=".opus"]:after { content: " (Music)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".mkv"]:after, a[href$=".mp4"]:after, a[href$=".mpg"]:after, a[href$=".mpeg"]:after, a[href$=".hevc"]:after, a[href$=".mov"]:after, a[href$=".webm"]:after, a[href$=".avi"]:after, a[href$=".ogv"]:after { content: " (Video)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".svg"]:after, a[href$=".png"]:after, a[href$=".webp"]:after, a[href$=".jpg"]:after, a[href$=".tiff"]:after, a[href$=".gif"]:after { content: " (Image)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".pdf"]:after, a[href$=".epub"]:after, a[href$=".mobi"]:after { content: " (eBook)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".pages"]:after, a[href$=".doc"]:after, a[href$=".docx"]:after, a[href$=".odt"]:after, a[href$=".rtf"]:after, a[href$=".txt"]:after { content: " (Document)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".numbers"]:after, a[href$=".xls"]:after, a[href$=".xlsx"]:after, a[href$=".ods"]:after { content: " (Spreadsheet)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".key"]:after, a[href$=".ppt"]:after, a[href$=".pptx"]:after, a[href$=".odp"]:after { content: " (Presentation)"; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a[href$=".woff"]:after, a[href$=".woff2"]:after, a[href$=".eot"]:after, a[href$=".otf"]:after, a[href$=".ttf"]:after { content: " (Typeface)"; }'));
				} else if (el == 'print-cover' && document.getElementById('print-cover').checked === true) {
					code.appendChild(document.createTextNode('.cover { page-break-after: always; }'));
				} else if (el == 'print-hide' && document.getElementById('print-hide').checked === true) {
					code.appendChild(document.createTextNode('.hide { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.show { display: initial; visibility: initial; }'));
				} else if (el == 'print-dark' && document.getElementById('print-dark').checked === true) {
					code.appendChild(document.createTextNode('html[data-paper=dark] body, html[data-paper=dark] del, html[data-paper=dark] hr, html[data-paper=dark] mark, html[data-paper=dark] s { background: initial; color: #ffffff; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=dark] hr { background-color: #ffffff; color: #ffffff; height: 2px; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=dark] blockquote, html[data-paper=dark] code, html[data-paper=dark] hr, html[data-paper=dark] kbd, html[data-paper=dark] pre { border: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=dark] abbr, html[data-paper=dark] acronym, html[data-paper=dark] table, html[data-paper=dark] td, html[data-paper=dark] th { border-bottom-color: #ffffff; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=dark] aside { border-left-color: #ffffff; }'));
				} else if (el == 'print-filter' && document.getElementById('print-filter').checked === true) {
					code.appendChild(document.createTextNode('.blur { filter: blur(10px); -webkit-filter: blur(10px); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.brightness { filter: brightness(100%); -webkit-filter: brightness(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.contrast { filter: contrast(100%); -webkit-filter: contrast(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.hue-90 { filter: hue-rotate(90deg); -webkit-filter: hue-rotate(90deg); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.hue-180 { filter: hue-rotate(180deg); -webkit-filter: hue-rotate(180deg); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.hue-270 { filter: hue-rotate(270deg); -webkit-filter: hue-rotate(270deg); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.invert { filter: invert(100%); -webkit-filter: invert(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.monochrome { filter: grayscale(100%); -webkit-filter: grayscale(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.saturate { filter: saturate(100%); -webkit-filter: saturate(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.sepia { filter: sepia(100%); -webkit-filter: sepia(100%); }'));
				} else if (el == 'print-img' && document.getElementById('print-img').checked === true) {
					code.appendChild(document.createTextNode('html[data-img] address, html[data-img] blockquote, html[data-img] details, html[data-img] dl, html[data-img] figcaption, html[data-img] h1, html[data-img] h2, html[data-img] h3, html[data-img] h4, html[data-img] h5, html[data-img] h6, html[data-img] p, html[data-img] hr, html[data-img] map, html[data-img] map + img, html[data-img] ol, html[data-img] pre, html[data-img] ruby, html[data-img] table, html[data-img] ul, html:after { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.full-page { display: block !important; height: 100vh; max-width: initial; width: 100vw; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=full-page] canvas, html[data-img=full-page] img, html[data-img=full-page] svg { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img] figure, .full-page { margin: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=full-page] { padding: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=gallery] { padding: 0.5em 1em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=gallery] canvas, html[data-img=gallery] img, html[data-img=gallery] svg { float: left; margin: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=individual] { align-items: center; display: flex; height: 100vh; justify-content: center; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.individual { display: block !important; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=individual] canvas, html[data-img=individual] img, html[data-img=individual] svg { display: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-img=individual], html[data-img=individual] canvas, html[data-img=individual] img, html[data-img=individual] svg { margin: 0; padding: 0; }'));
				} else if (el == 'print-break' && document.getElementById('print-break').checked === true) {
					code.appendChild(document.createTextNode('.page-break { page-break-before: always; }'));
				} else if (el == 'print-paper' && document.getElementById('print-paper').checked === true) {
					code.appendChild(document.createTextNode('.paper-size { box-sizing: border-box; margin: 0; overflow: hidden;'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('padding: 0; page-break-after: always; position: relative; }'));
				} else if (el == 'print2') {
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'print-paper2' && document.getElementById('print-paper').checked === true) {
					code.appendChild(document.createTextNode('@media (orientation: portrait) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=ledger] .paper-size { height: 17in; width: 11in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=legal] .paper-size { height: 14in; width: 8.5in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=letter] .paper-size { height: 11in; width: 8.5in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A3] .paper-size { height: 420mm; width: 297mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A4] .paper-size { height: 297mm; width: 210mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A5] .paper-size { height: 210mm; width: 148mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=JIS-B4] .paper-size { height: 364mm; width: 257mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=B4] .paper-size { height: 353mm; width: 250mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=JIS-B5] .paper-size { height: 257mm; width: 182mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=B5] .paper-size { height: 250mm; width: 176mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media (orientation: landscape) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=ledger] .paper-size { height: 11in; width: 17in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=legal] .paper-size { height: 8.5in; width: 14in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=letter] .paper-size { height: 8.5in; width: 11in; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A3] .paper-size { height: 297mm; width: 420mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A4] .paper-size { height: 210mm; width: 297mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=A5] .paper-size { height: 148mm; width: 210mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=JIS-B4] .paper-size { height: 257mm; width: 364mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=B4] .paper-size { height: 250mm; width: 353mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=JIS-B5] .paper-size { height: 182mm; width: 257mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-paper=B5] .paper-size { height: 176mm; width: 250mm; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'print-column' && document.getElementById('print-column').checked === true) {
					code.appendChild(document.createTextNode('@media (orientation: landscape) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-col=two] .column { -webkit-column-count: 2; -moz-column-count: 2; column-count: 2; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-col=three] .column { -webkit-column-count: 3; -moz-column-count: 3; column-count: 3; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html[data-col=four] .column { -webkit-column-count: 4; -moz-column-count: 4; column-count: 4; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'print-chrome' && document.getElementById('print-chrome').checked === true) {
					code.appendChild(document.createTextNode('@media print and (color) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('* { print-color-adjust: exact; -webkit-print-color-adjust: exact; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('@media print and (monochrome) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('canvas, figure, img, picture, svg { filter: grayscale(100%); -webkit-filter: grayscale(100%); }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('mark { background-color: #D3D3D3 !important; print-color-adjust: exact; -webkit-print-color-adjust: exact; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('print.css').children[1].children[1].appendChild(p); }
			});
			document.getElementById('print.css').children[1].children[1].appendChild(fieldset2);
			document.getElementById('print.css').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="stylesheet" media="print" href="assets/print.css">'));
			document.getElementById('print.css').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('print-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('print-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('print.css').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('print.css').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('print.css', 'text/css', meta );
	},false);
})();
(function readme(){
	let button = document.getElementById('readme-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('readme').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading readme'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('readme').children[1].childElementCount == 1) {
			document.getElementById('readme').children[1].appendChild(fieldset);
			document.getElementById('readme').children[1].children[1].appendChild(legend);
			var tag = ['readme','readme-overview','readme-usage','readme-installation','readme-support'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'readme') {
					code.appendChild(document.createTextNode('# README - <Text>'));
				} else if (el == 'readme-overview' && document.getElementById('readme-overview').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Overview:'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Name: <Text>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Background: <Text>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Description: <Text>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Badges: <List>'));
				} else if (el == 'readme-usage' && document.getElementById('readme-usage').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Usage:'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Features: <List>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('FileMap: <List>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Visuals: <Images>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Reading: <List>'));
				} else if (el == 'readme-installation' && document.getElementById('readme-installation').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Installation:'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Download: <Url>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Requirements: <List>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Dependancies: <List>'));
				} else if (el == 'readme-support' && document.getElementById('readme-support').checked === true) {
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Support:'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Status: <Text>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Contributing: <Url>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('License: <Url>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Acknowledgments: <List>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Updated: <Date>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Authors: <List>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('readme').children[1].children[1].appendChild(p); }
			});
			document.getElementById('readme-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('readme-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('readme').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('readme').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('readme', 'text/plain', meta );
	},false);
})();
(function robotstxt(){
	let button = document.getElementById('robots-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('robots.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading robots.txt'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('robots.txt').children[1].childElementCount == 1) {
			document.getElementById('robots.txt').children[1].appendChild(fieldset);
			document.getElementById('robots.txt').children[1].children[1].appendChild(legend);
			var tag = ['robots','robots-agent','robots-version','robots-disallow','robots-allow','robots-sitemap','robots-comment','robots-request','robots-visit'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'robots') {
					code.appendChild(document.createTextNode('# robots.txt - Search Engines List for this Website'));
				} else if (el == 'robots-agent' && document.getElementById('robots-agent').checked === true) {
					code.appendChild(document.createTextNode('User-agent: *'));
				} else if (el == 'robots-version' && document.getElementById('robots-version').checked === true) {
					code.appendChild(document.createTextNode('Robot-version: 2.0'));
				} else if (el == 'robots-disallow' && document.getElementById('robots-disallow').checked === true) {
					code.appendChild(document.createTextNode('Disallow: /cgi-bin/'));
				} else if (el == 'robots-allow' && document.getElementById('robots-allow').checked === true) {
					code.appendChild(document.createTextNode('Allow: /'));
				} else if (el == 'robots-sitemap' && document.getElementById('robots-sitemap').checked === true) {
					code.appendChild(document.createTextNode('Sitemap: https://domain.com/sitemap.xml'));
				} else if (el == 'robots-comment' && document.getElementById('robots-comment').checked === true) {
					code.appendChild(document.createTextNode('Comment: Details.'));
				} else if (el == 'robots-request' && document.getElementById('robots-request').checked === true) {
					code.appendChild(document.createTextNode('Request-rate: 5/1m 0500-1259 # Midnight To 7:59AM EST'));
				} else if (el == 'robots-visit' && document.getElementById('robots-visit').checked === true) {
					code.appendChild(document.createTextNode('Visit-time: 0600-0845 # GMT'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('robots.txt').children[1].children[1].appendChild(p); }
			});
			document.getElementById('robots-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('robots-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('robots.txt').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('robots.txt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('robots.txt', 'text/plain', meta);
	},false);
})();
(function securitytxt(){
	let button = document.getElementById('security-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('security.txt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading security.txt'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Apache'));
		if (document.getElementById('security.txt').children[1].childElementCount == 1) {
			document.getElementById('security.txt').children[1].appendChild(fieldset);
			document.getElementById('security.txt').children[1].children[1].appendChild(legend);
			var tag = ['security'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'security' && document.getElementById('security-txt').checked === true) {
					code.appendChild(document.createTextNode('# security.txt - Security Policy for this Website'));
					code.appendChild(document.createElement('br'));
					if (document.getElementById('security-pgp').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('----BEGIN PGP SIGNED MESSAGE----'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Hash: SHA256'));
					} if (document.getElementById('security-acknowledgments').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Acknowledgments: https://domain.com/security.html'));
					} if (document.getElementById('security-canonical').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Canonical: https://domain.com/.well-known/security.txt'));
					}
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Contact: https://domain.com/contact.html'));
					if (document.getElementById('security-encryption').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Encryption: https://domain.com/pgp-key.txt'));
					}
					var date = new Date(); var year = date.getFullYear();
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Expires: Thu, 31 Dec ' + year + ' 18:37:07 -0800'));
					if (document.getElementById('security-hiring').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Hiring: https://domain.com/jobs.html'));
					} if (document.getElementById('security-policy').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Policy: https://domain.com/policy.html'));
					} if (document.getElementById('security-lang').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Preferred-Languages: en'));
					} if (document.getElementById('security-pgp').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('-----BEGIN PGP SIGNATURE-----'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('Version: GnuPG v2.2'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('<Signature>'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('-----END PGP SIGNATURE----'));
					}
				} else if (el == 'security' && document.getElementById('security-dnt').checked === true) {
					code.appendChild(document.createTextNode('DNT-Policy: https://raw.githubusercontent.com/EFForg/dnt-policy/master/dnt-policy-1.0.txt'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('security.txt').children[1].children[1].appendChild(p); }
			});
			if (document.getElementById('security-dnt').checked === true) {
				document.getElementById('security.txt').children[1].children[1].appendChild(fieldset2);
				document.getElementById('security.txt').children[1].children[1].lastElementChild.appendChild(legend2);
				var txt = document.createElement('p'); var head = document.createElement('code');
				txt.appendChild(head).classList.add('code');
				head.appendChild(document.createTextNode('SetEnvIfNoCase DNT 1 DO_NOT_TRACK'));
				head.appendChild(document.createElement('br'));
				head.appendChild(document.createTextNode('CustomLog ${APACHE_LOG_DIR}/access.log combined env=!DO_NOT_TRACK'));
				document.getElementById('security.txt').children[1].children[1].lastElementChild.appendChild(txt);
				document.getElementById('security-download').classList.replace('show','hide');
			}
			if (document.getElementById('security-txt').checked === true) {
				document.getElementById('security-download').classList.replace('hide','show'); }
			}
		return false; }, false);
	let button2 = document.getElementById('security-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('security.txt').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('security.txt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('security.txt', 'text/plain', meta);
	},false);
})();
(function sitewebmanifest(){
	var typeset; var charset; let button = document.getElementById('webmanifest-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('site.webmanifest').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading site.webmanifest'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('site.webmanifest').children[1].childElementCount == 1) {
			document.getElementById('site.webmanifest').children[1].appendChild(fieldset);
			document.getElementById('site.webmanifest').children[1].children[1].appendChild(legend);
			var tag = ['webmanifest-json','webmanifest-xml'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'webmanifest-json' && document.getElementById('webmanifest-json').checked === true) {
					typeset = "application/json"; charset = "json";
					code.appendChild(document.createTextNode('{'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"short_name": "Name",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"name": "Name - Details",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"start_url": "/",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"icons": ['));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('{'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"src": "/images/x192.png",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"sizes": "192x192",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"type": "image/png"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('},'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('{'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"src": "/images/x512.png",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"sizes": "512x512",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"type": "image/png"'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('],'));
					if (document.getElementById('webmanifest-color').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"background_color": "#ffffff",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"theme_color": "#ffffff",'));
					} if (document.getElementById('webmanifest-description').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"description": "Description.",'));
					} if (document.getElementById('webmanifest-display').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"display": "standalone",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"display_override": "browser"'));
					} if (document.getElementById('webmanifest-related').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"related_applications": [{'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"platform": "play",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"url": "https://play.google.com/store/apps/details?id=application"'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('}],'));
					} if (document.getElementById('webmanifest-scope').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"scope": "https://domain.com",'));
					} if (document.getElementById('webmanifest-screenshots').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"screenshots": ['));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('{'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"src": "/images/x1024.png",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"sizes": "1024x1024",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"type": "image/png"'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('},'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('{'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"src": "/images/x2048.png",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"sizes": "2048x2048",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"type": "image/png"'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('}'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('],'));
					} if (document.getElementById('webmanifest-shortcuts').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"shortcuts": ['));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('{'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"name": "Name",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"url": "https://domain.com",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('},'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('{'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"name": "Name",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('"url": "https://domain.com",'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('},'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('}'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('],'));
					}
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				} else if (el == 'webmanifest-xml' && document.getElementById('webmanifest-xml').checked === true) {
					typeset = "text/xml"; charset = "xml";
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="utf-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<browserconfig>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<msapplication>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<tile>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<square70x70logo src="images/small.png"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<square150x150logo src="images/medium.png"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<wide310x150logo src="images/wide.png"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<square310x310logo src="images/large.png"/>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<TileColor>#ffffff</TileColor>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</tile>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</msapplication>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</browserconfig>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('site.webmanifest').children[1].children[1].appendChild(p); }
			});
			document.getElementById('site.webmanifest').children[1].children[1].appendChild(fieldset2);
			document.getElementById('site.webmanifest').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			if (document.getElementById('webmanifest-json').checked === true) {
				head.appendChild(document.createTextNode('<link rel="manifest" href="site.webmanifest">')); }
			if (document.getElementById('webmanifest-xml').checked === true) {
				head.appendChild(document.createTextNode('<meta name="msapplication-config" content="browserconfig.xml">')); }
			document.getElementById('site.webmanifest').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('webmanifest-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('webmanifest-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('site.webmanifest').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('site.webmanifest').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('geo.' + charset, typeset, meta );
	},false);
})();
(function sitemapxml(){
	let button = document.getElementById('sitemap-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('sitemap.xml').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading sitemap.xml'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('sitemap.xml').children[1].childElementCount == 1) {
			document.getElementById('sitemap.xml').children[1].appendChild(fieldset);
			document.getElementById('sitemap.xml').children[1].children[1].appendChild(legend);
			var tag = ['sitemap','sitemap-loc','sitemap-date','sitemap-change','sitemap-priority','sitemap2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				let mmap; let url;
				if (document.getElementById('sitemap-multi').checked === true) { mmap = 'sitemapindex'; url = 'sitemap'; }
				else { mmap = 'urlset'; url = 'url'; }
				if (el == 'sitemap') {
					code.appendChild(document.createTextNode('<?xml version="1.0" encoding="UTF-8"?>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<' + mmap + ' xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('<' + url + '>'));
				} else if (el == 'sitemap-loc') { 
					code.appendChild(document.createTextNode('<loc>https://domain.com</loc>'));
				} else if (el == 'sitemap-date' && document.getElementById('sitemap-date').checked === true) {
					var date = new Date().toISOString().slice(0, 10);
					code.appendChild(document.createTextNode('<lastmod>' + date + '</lastmod>'));
				} else if (el == 'sitemap-change' && document.getElementById('sitemap-change').checked === true) {
					code.appendChild(document.createTextNode('<changefreq>monthly</changefreq>'));
				} else if (el == 'sitemap-priority' && document.getElementById('sitemap-priority').checked === true) {
					code.appendChild(document.createTextNode('<priority>0.5</priority>'));
				} if (el == 'sitemap2') {
					code.appendChild(document.createTextNode('</' + url + '>'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('</' + mmap + '>'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('sitemap.xml').children[1].children[1].appendChild(p); }
			});
			document.getElementById('sitemap-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('sitemap-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('sitemap.xml').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('sitemap.xml').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('sitemap.xml', 'application/text+xml', meta );
	},false);
})();
(function stylecss(){
	let button = document.getElementById('style-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('style.css').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading style.css'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Head'));
		if (document.getElementById('style.css').children[1].childElementCount == 1) {
			document.getElementById('style.css').children[1].appendChild(fieldset);
			document.getElementById('style.css').children[1].children[1].appendChild(legend);
			var tag = ['style','style2','style-bp','style3'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'style') {
					code.appendChild(document.createTextNode('@media screen {'));
				} else if (el == 'style2') {
					code.appendChild(document.createTextNode('*, *::before, *::after { box-sizing: border-box; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('canvas, img, picture { display: block; max-width: 100%; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('button, input, select, textarea { font: inherit; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('body { line-height: 1.5; min-height: 100vh; text-rendering: optimizeSpeed; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ul[role=\'list\'], ol[role=\'list\'] { list-style: none; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote, body, dd, dl, figure, h1, h2, h3, h4, h5, h6, p { margin: 0; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('html:focus-within { scroll-behavior: smooth; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('a:not([class]), abbr:not([class]), acronym:not([class]), ins:not([class]) { text-decoration-skip-ink: auto; }'));
				} else if (el == 'style-bp' && document.getElementById('style-bp').checked === true) {
					code.appendChild(document.createTextNode('::selection { background-color: #ffffff; color: #000000; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('blockquote, code, kbd, pre { border: 1px solid grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('abbr[title], acronym[title] { border-bottom: 1px dotted grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('del, s { color: grey; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('body { font-family: font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('code, kbd, pre, samp, tt, var { font-family: \'Courier New\', Courier, \'Lucida Sans Typewriter\', \'Lucida Typewriter\', monospace; font-size: 0.8em; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('caption, figcaption { font-style: italic; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('dt { font-weight: bold; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.hide { height: 1px; left: -1000px; overflow: hidden; position: absolute; top: -1px; width: 1px; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('.show { height: auto; left: auto; overflow: auto; position: relative; top: auto; width: auto; }'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('u { text-decoration-style: wavy; }'));
				} else if (el == 'style3') {
					code.appendChild(document.createTextNode('}'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('style.css').children[1].children[1].appendChild(p); }
			});
			document.getElementById('style.css').children[1].children[1].appendChild(fieldset2);
			document.getElementById('style.css').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<link rel="stylesheet" media="screen" href="assets/style.css">'));
			document.getElementById('style.css').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('style-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('style-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('style.css').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('style.css').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('style.css', 'text/css', meta );
	},false);
})();
(function subtitlesvtt(){
	let button = document.getElementById('subtitles-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('subtitles.vtt').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading subtitles.vtt'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Video'));
		if (document.getElementById('subtitles.vtt').children[1].childElementCount == 1) {
			document.getElementById('subtitles.vtt').children[1].appendChild(fieldset);
			document.getElementById('subtitles.vtt').children[1].children[1].appendChild(legend);
			var tag = ['subtitles','subtitles-record','subtitles-comments'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				let sX = ""; let sX2 = ""; let setting = "";
				if (document.getElementById('subtitles-style').checked === true) { sX = "<c.classname>"; sX2 = "</c>"; }
				if (document.getElementById('subtitles-settings').checked === true) { setting = " align:start line:0 position:0% size:100%"; }
				if (el == 'subtitles') {
					code.appendChild(document.createTextNode('WEBVTT - <Title>'));
				} else if (el == 'subtitles-record' && document.getElementById('subtitles-record').checked === true) {
					code.appendChild(document.createTextNode('1'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('HH:MM:SS.TTT --> HH:MM:SS.TTT'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('- ' + sX + 'Subtitle.' + sX2 + setting));
				} else if (el == 'subtitles-comments' && document.getElementById('subtitles-comments').checked === true) {
					code.appendChild(document.createTextNode('NOTE'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Comment.'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('Another Comment.'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('subtitles.vtt').children[1].children[1].appendChild(p); }
			});
			document.getElementById('subtitles.vtt').children[1].children[1].appendChild(fieldset2);
			document.getElementById('subtitles.vtt').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<video height="480" width="640" controls>'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('<source src="videos/video.mp4" type="video/mp4">'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('<source src="videos/video.webm" type="video/webm">'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('<track kind="subtitles" src="videos/subtitles.vtt" label="English" srclang="en">'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('</video>'));
			document.getElementById('subtitles.vtt').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('subtitles-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('subtitles-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('subtitles.vtt').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('subtitles.vtt').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('subtitles.vtt', 'text/vtt', meta );
	},false);
})();
(function swjs(){
	let button = document.getElementById('sw-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('sw.js').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading sw.js'); }
		var fieldset = document.createElement('fieldset'); var fieldset2 = document.createElement('fieldset');
		fieldset.classList.add('spacer'); fieldset2.classList.add('spacer');
		var legend = document.createElement('legend'); var legend2 = document.createElement('legend');
		legend.classList.add('assist'); legend2.classList.add('assist');
		legend.appendChild(document.createTextNode('Results')); legend2.appendChild(document.createTextNode('Body'));
		if (document.getElementById('sw.js').children[1].childElementCount == 1) {
			document.getElementById('sw.js').children[1].appendChild(fieldset);
			document.getElementById('sw.js').children[1].children[1].appendChild(legend);
			var tag = ['sw'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'sw') {
					code.appendChild(document.createTextNode('var cacheName = "project-cache";'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('self.addEventListener("install", function(evt) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('evt.waitUntil(precache());'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('function precache() {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return caches.open(cacheName).then(function (cache) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return cache.addAll(['));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/index.html", "/error.html",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/humans.txt", "/.well-known/security.txt",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/site.webmanifest",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/assets/style.css",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/assets/script.js", "/sw.js",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('"/apple-touch-icon.png", "/images/banner.png", "/images/x192.png", "/images/x512.png", "/images/icon.svg", "/favicon.ico",'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode(']);'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('self.addEventListener("fetch", function(evt) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('evt.respondWith(fromCache(evt.request));'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('evt.waitUntil(update(evt.request));'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('function fromCache(request) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return caches.open(cacheName).then(function (cache) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return cache.match(request).then(function (matching) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return matching || Promise.reject("no-match");'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('function update(request) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return caches.open(cacheName).then(function (cache) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return fetch(request).then(function (response) {'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('return cache.put(request, response);'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('});'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('}'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('sw.js').children[1].children[1].appendChild(p); }
			});
			document.getElementById('sw.js').children[1].children[1].appendChild(fieldset2);
			document.getElementById('sw.js').children[1].children[1].lastElementChild.appendChild(legend2);
			var txt = document.createElement('p'); var head = document.createElement('code');
			txt.appendChild(head).classList.add('code');
			head.appendChild(document.createTextNode('<script>'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('"use strict";'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('if (\'serviceWorker\' in navigator) {'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('navigator.serviceWorker.register(\'/sw.js\');'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('}'));
			head.appendChild(document.createElement('br'));
			head.appendChild(document.createTextNode('</script>'));
			document.getElementById('sw.js').children[1].children[1].lastElementChild.appendChild(txt);
			document.getElementById('sw-generate').classList.replace('show','hide');
			document.getElementById('sw-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('sw-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('sw.js').children[1].children[1].childElementCount - 1;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('sw.js').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('sw.js', 'text/javascript', meta );
	},false);
})();
(function vcardvcf(){
	let button = document.getElementById('vcard-generate');
	button.addEventListener('click', function(){
	try { var myobj = document.getElementById('vcard.vcf').children[1].children[1]; myobj.remove();
	} catch (error) { console.log('Loading vcard.vcf'); }
		var fieldset = document.createElement('fieldset');
		fieldset.classList.add('spacer');
		var legend = document.createElement('legend');
		legend.classList.add('assist');
		legend.appendChild(document.createTextNode('Results'));
		if (document.getElementById('vcard.vcf').children[1].childElementCount == 1) {
			document.getElementById('vcard.vcf').children[1].appendChild(fieldset);
			document.getElementById('vcard.vcf').children[1].children[1].appendChild(legend);
			var tag = ['vcard','vcard-name','vcard-date','vcard-phone','vcard-email','vcard-website','vcard-social','vcard-location','vcard-photo','vcard-note','vcard-related','vcard-uid','vcard2'];
			tag.forEach(function(el) {
				var p = document.createElement('p');
				var code = document.createElement('code');
				if (el == 'vcard') {
					code.appendChild(document.createTextNode('BEGIN:VCARD'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('VERSION:3.0'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('PRODID:-//Business//Product//EN'));
				} else if (el == 'vcard-name' && document.getElementById('vcard-name').checked === true) {
					code.appendChild(document.createTextNode('N:Last;First;Middle;Prefix;Suffix'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('ORG:Company'));
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('FN:Full Name'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('GENDER:O'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('NICKNAME:Nick'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('ROLE:Role'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('TITLE:Job'));
					}
				} else if (el == 'vcard-date' && document.getElementById('vcard-date').checked === true) {
					code.appendChild(document.createTextNode('BDAY:1999-01-01'));
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('ANNIVERSARY:19950101'));
					}
				} else if (el == 'vcard-phone' && document.getElementById('vcard-phone').checked === true) {
					code.appendChild(document.createTextNode('TEL;type=IPHONE;type=CELL;type=VOICE;type=pref:01234 567890'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('TEL;type=HOME;type=VOICE:09876 543210'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('IMPP;X-SERVICE-TYPE=Skype;type=WORK;type=pref:skype:ProfileID'));
				} else if (el == 'vcard-email' && document.getElementById('vcard-email').checked === true) {
					code.appendChild(document.createTextNode('EMAIL;type=INTERNET;type=HOME;type=pref:email@domain.com'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('EMAIL;type=INTERNET;type=WORK:email@domain.com'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('item1.EMAIL;type=INTERNET:email@domain.com'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('item1.X-ABLabel:_$!<Other>!$_'));
				} else if (el == 'vcard-website' && document.getElementById('vcard-website').checked === true) {
					code.appendChild(document.createTextNode('item3.URL;type=pref:https://domain.com'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('item3.X-ABLabel:_$!<HomePage>!$_'));
				} else if (el == 'vcard-social' && document.getElementById('vcard-social').checked === true) {
					code.appendChild(document.createTextNode('X-SOCIALPROFILE;type=twitter:http://twitter.com/ProfileID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('X-SOCIALPROFILE;type=facebook:http://facebook.com/ProfileID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('X-SOCIALPROFILE;type=uk.linkedin.com;x-user=ProfileID:http://uk.linkedin.com/in/ProfileID'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('X-SOCIALPROFILE;type=gamecenter;x-user=ProfileID:0000000000:http://link.gc.apple.com/players/G:0000000000'));
				} else if (el == 'vcard-location' && document.getElementById('vcard-location').checked === true) {
					code.appendChild(document.createTextNode('item2.ADR;type=HOME;type=pref:;;Street;Town;Region;ZipCode;Country'));
					code.appendChild(document.createElement('br'));
					code.appendChild(document.createTextNode('item2.X-ABADR:us'));
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('GEO:geo:00.000000,-000.000000'));
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('LANG;TYPE=work;PREF=1:en'));
					}
				} else if (el == 'vcard-photo' && document.getElementById('vcard-photo').checked === true) {
					code.appendChild(document.createTextNode('PHOTO;ENCODING=b;TYPE=JPEG:IMAGE'));
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createElement('br'));
						code.appendChild(document.createTextNode('LOGO:https://domain.com/logo.jpg'));
					}
				} else if (el == 'vcard-note') {
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createTextNode('NOTE:Details.'));
					}
				} else if (el == 'vcard-related') {
					if (document.getElementById('vcard-optional').checked === true) {
						code.appendChild(document.createTextNode('RELATED;TYPE=contact:https://domain.com/contact.vcf'));
					}
				} else if (el == 'vcard-uid') {
					let random = Math.floor(Math.random() * 10000000000000000);
					code.appendChild(document.createTextNode('UID:' + random));
				} else if (el == 'vcard2') {
					code.appendChild(document.createTextNode('END:VCARD'));
				}
				if (code.innerText != "") {
					p.appendChild(code).classList.add('code');
					document.getElementById('vcard.vcf').children[1].children[1].appendChild(p); }
			});
			document.getElementById('vcard-download').classList.replace('hide','show'); }
		return false; }, false);
	let button2 = document.getElementById('vcard-download');
	button2.addEventListener('click', function(){
		var meta = ""; var arr = document.getElementById('vcard.vcf').children[1].children[1].childElementCount;
		for (var i = 1; i < arr; i++) {
			meta = meta + document.getElementById('vcard.vcf').children[1].children[1].children[i].innerText + '\n'; }
		meta = meta.slice(0, -1);
		download('vcard.vcf', 'text/vcard', meta );
	},false);
})();