import 'styles/styles.scss'
import Nav from 'components/nav'

/**
 * Stub for the translation function
 * @param {string} text 
 */
function l10n(text){
    return text
}

/**
 * Render the home page
 */
const renderHome = () => (
<>
    <Nav />
    <div className="home-container">
        <p className="home-title">{l10n("ui.home.title")}</p>
        <p className="home-titleSub">{l10n("ui.home.titleSub")}</p>
        <p className="home-welcome">{l10n("ui.home.welcome")}</p>
        <p className="home-getStarted">{l10n("ui.home.getStarted")}</p>
        <div className="home-start">
        <span>{l10n("ui.home.start")}</span>
        </div>
    </div>      
</>
)

export default renderHome