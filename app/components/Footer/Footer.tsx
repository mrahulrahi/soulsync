import Link from 'next/link'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="footer-nav-list d-flex gap-2">
                                <div className="footer-nav-item">
                                    <Link className="footer-nav-link" href="#!"> About</Link>
                                </div>
                                <div className="footer-nav-item">
                                    <Link className="footer-nav-link" href="#!">Help</Link>
                                </div>
                                <div className="footer-nav-item">
                                    <Link className="footer-nav-link" href="#!">Terms</Link>
                                </div>
                                <div className="footer-nav-item">
                                    <Link className="footer-nav-link" href="#!">Privacy</Link>
                                </div>
                            </div>
                            <div className="copyright"> © copyright 2023 by Instello</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer