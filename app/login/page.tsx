import '../Form.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from 'next/link';



export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="form-container d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-box mx-auto">
                <h5>Log in</h5>
                <p>Email or Username</p>
                <div className="row g-2">
                  <div className="col-lg-12">
                    <input type="email" className="form-control" placeholder="example@mydomain.com" />
                  </div>
                  <div className="col-lg-12">
                    <input type="password" className="form-control" placeholder="***********" />
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember Me
                        </label>
                      </div>
                      <Link href="#!" className="btn-link"> Forgot Your Password? </Link>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-default btn-block" value="Login" />
                  </div>
                  <div className="col-lg-12">
                    <p className="not-info mt-3 text-center"> Not registered? <Link href="/register" className="btn-link"> Create a account </Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
