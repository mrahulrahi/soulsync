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
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="nav-brand">
                                    <Image src="/images/logo.png" alt="logo" width={128} height={48} />
                                </div>
                                <div className="header-right">
                                    <Link href="" className="btn btn-light">Login</Link>
                                    <Link href="" className="btn btn-default">Register</Link>
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