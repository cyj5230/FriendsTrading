function avatar(address, style)
{
	const retricon = require('retricon');
	const = require('util').format;
	let avatar = '';

	switch(style){
		case '0':
			avatar = "<img src='" + retricon(i.toString()).toDataURL() + "'>";
			break;
		case '1':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.mini).toDataURL() + "'>";
			break;
		case '2':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.gravatar).toDataURL() + "'>";
			break;
		case '3':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.mono).toDataURL() + "'>";
			break;
		case '4':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.mosaic).toDataURL() + "'>"
			break;
		case '5':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.window).toDataURL() + "'>";
			break;
		case '6':
			avatar = "<img src='" + retricon(i.toString(), retricon.style.github).toDataURL() + "'>";
			break;
		default:
			avatar = "<img src='" + retricon(i.toString()).toDataURL() + "'>";
	}
	
	return avatar;
}
