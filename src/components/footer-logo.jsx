import FooterLogo from "../assets/footer-logo.svg"

export const Logo = () => {
    return(
        <div className="right-content">
            <div className="FooterLogo">
                <img src={FooterLogo} />
            </div>

            <div className="footer-menu">
                <ul>
                    <li><a href="$">Партнерам</a></li>
                    <li className="foo"><a href="$">Разработчикам</a></li>
                    <li className="foo"><a href="$">Вакансии</a></li>
                </ul>
            </div>
        </div>
    )
}