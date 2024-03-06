import { Link } from "react-router-dom";
import { ScrollTop } from "../Components/ScrollTop"
import "../Login.css";
import { loadScripts, unloadScripts } from "../Components/LoadScript";
import { useEffect } from "react";

export const RegistrationPage=()=>{
    useEffect(() => {
        const scripts = loadScripts();
    
        window.addEventListener('popstate', () => {
          // Handle popstate event (user navigates back or forward)
          unloadScripts(scripts);
          loadScripts();
        });
    
        return () => {
          // Cleanup the scripts when the component unmounts
          unloadScripts(scripts);
          window.removeEventListener('popstate', () => {
            unloadScripts(scripts);
            loadScripts();
          });
        };
      }, []);
    return(
        <>
             <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="loginheading">Welcome to BayPass DrivingSchool</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-10">
        <div className="wrap d-md-flex">
          <div className="img" style={{backgroundImage: 'url(assets/img/course/course_3_5.jpg)'}}>
          </div>
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign Up</h3>
              </div>
            </div>
            <form action="#" className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">Username</label>
                <input type="text" className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">Email Address</label>
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="th-btn">Sign Up</button>
              </div>
            </form>
            <p className="text-center">If you are member? <Link data-toggle="tab" to="/teen-login">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        <ScrollTop/>
        </>
    )
}