import logoPath from "./react-logo.png"
function Logo() {
    return (
        <header>
            <nav className={"nav"}>
                <img className={"logo"} style={{width: 100, height: 100}} src={logoPath} />
                <ul className={"nav-items"}>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
);
}

export default Logo;
