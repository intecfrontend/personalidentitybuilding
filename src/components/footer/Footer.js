
import { HashLink as Link } from "react-router-hash-link";
import { useSelector } from "react-redux";
import Icon from "@identitybuilding/idb-react-iconlib";
import React from "react";

const Footer = () => {

	const translate = useSelector(state => state.general.translate);
	let social = [
		{ class: "idb", text: "BE0718.600.051", url: "https://identitybuilding.be", image: require('../../library/imgs/logos/idb/logo_idb_secundair.svg') },
		// { class: "fb", icon: "Facebook", url: "https://facebook.com/identityBuildingBelgium" },
		// { class: "insta", icon: "Instagram", url: "https://instagram.com/identitybuilding/" },
		// { class: "li", icon: "Linkedin", url: "https://linkedin.com/company/ondernemersnetwerk/about/" },
	]
	
	return (
		<footer>
			<div className="footerWrapper">

				{/* Information about identityBuilding bv */}
				<div className="footerSocial">
					{social.map(item => (
						<a className={item.class} href={item.url} key={item.class} rel="noopener noreferrer" target="_blank">
							{/* {item.type ? <Icon name={item.type} />
								: <h2>{item.text}</h2>} */}
							<figure><img width='125' height='25px' src={item.image} alt={item.text} /></figure>
							{item.text}
						</a>
					))}
				</div>

				{/* Privacy message */}
				<div className="footerProtection">
					<Link to="/#privacy">
						<Icon name="Protection" />
						<span>{translate("how_do_we_protect")}</span>
					</Link>
				</div>

				{/* Links to our privacy pages */}
				<div className="footerPrivacy">
					<a href="mailto:support@ondernemersnetwerk.be">{translate("support")}</a>
					<Link to={"/privacy/policy"}>{translate("privacy_policy")}</Link>
					<Link to={"/privacy/policy#terms"}>{translate("terms_and_conditions")}</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
