
import { useThemeHook } from "../../../hooks/useThemeHook";

export default function Header() {
    const [isDark, setIsDark] = useThemeHook();
    // const [isDark, setIsDark] = useContext(themeContext);
    //console.log(JSON.parse(localStorage.getItem('isDarkMode')))
    // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    // if (isDark) {
    //     document.body.classList.add('dark')
    // } else {
    //     document.body.classList.remo('dark')
    // }
    return (
        <header className={`header-container ${(isDark) ? 'dark' : ''}`}>
            <div className="header-content">
                <h2 className="title"><a href="/">Where in the world</a></h2>
                <p className="theme-change"
                    onClick={() => {

                        setIsDark(!isDark)
                        localStorage.setItem('isDarkMode', !isDark)
                    }}><i className={`fa-regular fa-${isDark ? 'moon' : 'sun'}`}>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode</i></p>
            </div>
        </header>
    )
}
