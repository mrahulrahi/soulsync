import './Header.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center justify-content-sm-between">
                                <Link href="/" className="nav-brand">
                                    <Image src="/images/logo.png" alt="logo" width={130} height={50}  quality={100} />
                                </Link>
                                <div className="header-right d-none d-sm-block">
                                    <Link href="/login" className="btn btn-light">Login</Link>
                                    <Link href="/register" className="btn btn-default">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header