export function FooterPlatform() {
    return (
        <footer className="footer">
            <div className="container">
               <section className="footer-legal">
                    <nav>
                        <ul className="list">
                            <li className="list-item"><a className="link" href="#">Home</a></li>
                            <li className="list-item"><a className="link" href="#">Terms and Conditions</a></li>
                            <li className="list-item"><a className="link" href="#">Privacy Policy</a></li>
                            <li className="list-item"><a className="link" href="#">Collection Statement</a></li>
                            <li className="list-item"><a className="link" href="#">Help</a></li>
                            <li className="list-item"><a className="link" href="#">Manage Account</a></li>
                        </ul>
                    </nav>
                    <p className="tx tx-copyright">Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
                </section>
                <section className="footer-social">
                    <nav>
                        <ul className="list list-social">
                            <li>
                                <a className="link" href="#">
                                    <img className="icon" src="./src/assets/social/facebook-white.svg" alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <img className="icon" src="./src/assets/social/twitter-white.svg" alt="Twitter" />
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <img className="icon" src="./src/assets/social/instagram-white.svg" alt="Instagram" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="list list-stores">
                            <li>
                                <a className="link" href="#">
                                    <img src="./src/assets/store/app-store.svg" alt="App Store" />
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <img src="./src/assets/store/play-store.svg" alt="Play Store" />
                                </a>
                            </li>
                            <li>
                                <a className="link" href="#">
                                    <img src="./src/assets/store/windows-store.svg" alt="Windows Store" />
                                </a>
                            </li> 
                        </ul>
                    </nav>
                </section> 
            </div>
        </footer>
    )
}