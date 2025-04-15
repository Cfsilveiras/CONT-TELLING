import "../styles/header.css";


export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Logo-App" />
            </div>

            <nav className="menu">
                <ul>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#"></a>Option 2</li>
                    <li><a href="#"></a>Option 3</li>
                </ul>
            </nav>
            </header>
    );
}