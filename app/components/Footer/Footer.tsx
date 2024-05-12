import Link from 'next/link'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-column flex-sm-row gap-3 align-items-center justify-content-between">
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
                            <div className="copyright"> &copy; Copyright 2023 by Instello</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer