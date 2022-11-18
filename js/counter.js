const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
var fulldate = (month+`/`+day+`/`+year);
var visitCount = localStorage.getItem("page_view");
var el = document.getElementById('element');
var body = document.getElementsByTagName('body');
el.innerHTML = '<p id="clickme" onmouseover=\"setTimeout(add,10);\">i dare you to hover over me</p>';
var i = 0
function randomString(length, chars) {
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}
function add() {
	setInterval(add2, 10000)
}
function add2() {
var colors = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
let color = colors[Math.floor(Math.random() * colors.length)];
let combo = (randomString(Math.floor(Math.random() * 1) + 2, '123456789123456789'));
let d = ('|]1${0R|].61F7/'+randomString(Math.floor(Math.random() * 1) + 7, '123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'));
let w = (`${randomString(5, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')}-`+`${randomString(5, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')}-`+`${randomString(5, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')}-`+`${randomString(5, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')}`);
var c5 = ['\/1$@1', '\/1$@2', '\/1$@3', '\/1$@4', '\/1$@5', '|\|/|@$73R1', '|\|/|@$73R2', '|\|/|@$73R3', '|\|/|@$73R4', '|\|/|@$73R5'];
var c6 = c5[Math.floor(Math.random() * c5.length)]
if (c6 === '\/1$@1') {
	var c1 = Math.floor(Math.random() * 9999999999) + 4305210000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("\/1$@");
}
if (c6 === '\/1$@2') {
	var c1 = Math.floor(Math.random() * 9999999999) + 4720880000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("\/1$@");
}
if (c6 === '\/1$@3') {
	var c1 = Math.floor(Math.random() * 9999999999) + 4313750000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("\/1$@");
}
if (c6 === '\/1$@4') {
	var c1 = Math.floor(Math.random() * 9999999999) + 4330880000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("\/1$@");
}
if (c6 === '\/1$@5') {
	var c1 = Math.floor(Math.random() * 9999999999) + 4390920000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("\/1$@");
}
if (c6 === '|\|/|@$73R1') {
	var c1 = Math.floor(Math.random() * 9999999999) + 5522890000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("|\|/|@$73R{@R|]");
}
if (c6 === '|\|/|@$73R2') {
	var c1 = Math.floor(Math.random() * 9999999999) + 5464790000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("|\|/|@$73R{@R|]");
}
if (c6 === '|\|/|@$73R3') {
	var c1 = Math.floor(Math.random() * 9999999999) + 5121120000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("|\|/|@$73R{@R|]");
}
if (c6 === '|\|/|@$73R4') {
	var c1 = Math.floor(Math.random() * 9999999999) + 5121190000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("|\|/|@$73R{@R|]");
}
if (c6 === '|\|/|@$73R5') {
	var c1 = Math.floor(Math.random() * 9999999999) + 5525890000000000;
	var c2 = Math.floor(Math.random() * 11) + 1;
	var c3 = Math.floor(Math.random() * 4) + 2023;
	var c4 = Math.floor(Math.random() * 899) + 100;
	var c7 = ("|\|/|@$73R{@R|]");
}
var l = '|_1{3|\|$3: '+randomString(7, '01234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
var p = (Math.floor(Math.random() * 254) + 1 + '.' + Math.floor(Math.random() * 254) + 1 + '.' + Math.floor(Math.random() * 254) + 1 + '.' + Math.floor(Math.random() * 254) + 1);
document.body.innerHTML ='<p style=\'color: '+`${color}`+';\' id='+combo+'>'+combo+'</p><br><p>1 @(\\|/) 3|\\|73R1|\\|6 7|-|3 (\\|/)@1|\\|FR@(\\|/)3</p><br><p>'+d+'</p><br><p>'+w+'</p><br><p>'+c1+'|'+c2+'|'+c3+'|'+c4+'|'+c7+'</p><br><p>'+l+'</p><br><p>'+p+'</p>';
setTimeout(add3,5000)
function add3() {
document.body.innerHTML ='<p>YOU FOOL DONT YOU HAVE ANY IDEA WHAT YOU HAVE DONE?!</p>';	
}
i++
}
// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
  document.cookie = 'VisitorCount='+visitCount+'; expires=Wed, 1 Jan 2070 13:47:11 UTC; path=/';
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
document.getElementById("website-counter").innerHTML = visitCount;