import { Link } from "react-router-dom";
import { ScrollTop } from "../Components/ScrollTop"
import "../Login.css";
import { loadScripts, unloadScripts } from "../Components/LoadScript";
import { useEffect } from "react";

export const LoginPage=()=>{
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
                <h3 className="mb-4">Sign In</h3>
              </div>
            </div>
            <form action="#" className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">Username</label>
                <input type="text" className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="th-btn">Sign In</button>
              </div>
              <div className="form-group d-md-flex">
                <div className="w-50 text-left">
                  <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </form>
            <p className="text-center">Not a member? <Link data-toggle="tab" to="/registration">Sign Up</Link></p>
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