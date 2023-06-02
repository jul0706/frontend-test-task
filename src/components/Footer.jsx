function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer__copyright">
                &copy;{year} Юлия Ивановская
            </p>
        </footer>
    )
}

export default Footer;