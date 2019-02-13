import React ,{Component} from "react";
import {withRouter,Route,Switch} from "react-router-dom";
import {connect} from "react-redux";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Welcome from "./Welcome/Welcome";
import Agenda from "./Agenda/Agenda";
import Incontournable from "./Incontournable/Incontournable";
import Gallerie from "./Gallerie/Gallerie";
import Presse from "./Presse/Presse";
import Contact from "./Contact/Contact";
import Help from "./Help/Help";
import Faq from "./Faq/Faq";
import Cgu from "./Cgu/Cgu";

class Routeur extends Component {
    render() {
        return (
            <div className="routeur">
                <Nav />
                <Switch>
                    <Route path="/Cgu" component={Cgu} />
                    <Route path="/Faq" component={Faq} />
                    <Route path="/Help" component={Help} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Presse" component={Presse} />
                    <Route path="/Gallerie" component={Gallerie} />
                    <Route path="/Incontournable" component={Incontournable} />
                    <Route path="/Agenda" component={Agenda} />
                    <Route exact path="/" component={Welcome} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routeur));