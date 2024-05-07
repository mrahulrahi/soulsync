import '../Form.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from 'next/link';



export default function RegisterPage() {
  return (
    <main>
      <Header />
      <div className="form-container d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-box mx-auto">
                <h5>Sign in</h5>
                <p>Register to manage your account</p>
                <div className="row g-2">
                  <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="col-lg-12">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-lg-12">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="col-lg-12">
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        I Agree  <Link href="#!" className="btn-link"> Terms and Conditions </Link> 
                        </label>
                      </div>
                    
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-default btn-block" value="Register" />
                  </div>
                  <div className="col-lg-12">
                    <p className="not-info mt-3 text-center"> Do you have an account? <Link href="/login" className="btn-link"> Login </Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
