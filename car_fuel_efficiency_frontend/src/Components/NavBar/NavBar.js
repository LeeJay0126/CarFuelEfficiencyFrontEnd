import './NavBar.css';
const NavBar = () => {
    const logoName = "Lucas & Jay";

    return (
        <div className ="navBar">
            <p className="logo">
                <a href="#">{logoName}</a>
            </p>
        </div>
    );
}

export default NavBar;