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
                <div className="nav-body d-flex align-items-center justify-content-between">
                <div className="nav-body-top d-flex flex-column w-100">
                    <div className="nbt-profile-img-box mx-auto rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                        <div className="nbt-profile-img ratio ratio-1x1 rounded-circle overflow-hidden">
                        <Image src="/images/avatars/avatar-2.jpg" alt="logo" fill className="w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar