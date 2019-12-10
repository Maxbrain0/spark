import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Recovery from '../src/components/Recovery';
import Spinner from '../src/components/global/Spinner';
import SEO from "../next-seo.config";
import {DefaultSeo} from "next-seo";
import Footer from '../src/components/global/Footer';

function Authenticate() {
  return (
    <>
      <div className="uk-container">
        <DefaultSeo {...Object.assign(SEO, {
          title: `Authenticate`,
        })}
        />
        <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="true">
          <div className="uk-margin-auto-left uk-margin-auto-right" >
            <div className="uk-width-1-1@m">
              <Spinner ratio={3} classes="uk-hidden"/>
              <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                <ul className="uk-tab uk-flex-center" uk-switcher="animation: uk-animation-fade">
                  <li><a href="#">Log In</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li className="uk-hidden">Forgot Password?</li>
                </ul>
                <ul className="uk-switcher uk-margin">
                  <li>
                    <Login/>
                  </li>
                  <li>
                    <Signup/>
                  </li>
                  <li>
                    <Recovery/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Authenticate;
