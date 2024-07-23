import styles from './Header.module.css'
import forgeLogo from '../assets/forge_logo.svg'

export function Header()
{
    return(
        <header className={styles.header}>
            <img src={forgeLogo} alt="Logotipo da Forge"/>
        </header>
    )
}