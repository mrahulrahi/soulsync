import Link from 'next/link'
import Image from 'next/image'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <div className="nav-head d-flex align-items-center justify-content-between">
                    <Link href="/" className="nav-brand">
                        <Image src="/images/logo.png" alt="logo" width={130} height={50} quality={100} />
                    </Link>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar