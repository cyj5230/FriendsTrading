import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Leftbar from './components/Leftbar';
import MarketDisplay from './components/MarketDisplay';
import About from './components/About';
import ProfileDisplay from './components/ProfileDisplay';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      name:'Yuki',
      id:'007',
      introduction:'This is a sample introduction.',
      price:30.00,
      masterID:'008',
      slavesID:['001','003','004','005','006'],      
      marketSlaves:['001','002','003','004','005','006','007','008','009']
    };
  }

  componentDidMount () {
      const script0 = document.createElement("script");

      script0.src = "js/main.js";
      script0.async = true;

      const script1 = document.createElement("script");

      script1.src = "js/slick-custom.js";
      script1.async = true;

      document.body.appendChild(script0);
      document.body.appendChild(script1);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Header 
          name={this.state.name} 
          slavesID={this.state.slavesID}
          price={this.state.price}
        />

        {/*<!-- Title Page -->*/}
        <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{backgroundImage: "url(images/bg-banner-03.jpg)"}}>

          <h2 className="l-text2 t-center shadow">
            Friends Trading
          </h2>
          <p className="m-text13 t-center inline-yellow">
            Buy and Sell Your Friends in Blockchain
          </p>
        </section>

        {/*  <!-- Content page -->*/}
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
              <Switch>
                <Route path='/' 
                 render={()=>
                    <Market 
                    id={this.state.id}
                    slavesID={this.state.slavesID}
                    masterID={this.state.masterID}
                    marketSlaves={this.state.marketSlaves}
                    />}
                  exact={true}/>              
                <Route path='/profile' 
                  render={()=>
                    <Profile 
                    id={this.state.id}
                    name={this.state.name} 
                    slavesID={this.state.slavesID}
                    masterID={this.state.masterID}
                    introduction={this.state.introduction}
                    price={this.state.price}
                    />}
                />           
                <Route path='/about' component={About}/>
              </Switch>
          </div>
        </section>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

class Market extends Component{
  render(){
    return(
      <div className="row">            
        <Leftbar />
        <MarketDisplay 
          id={this.props.id}
          slavesID={this.props.slavesID}
          masterID={this.props.masterID}
          marketSlaves={this.props.marketSlaves}
        />            
      </div>
    );
  }
}

class Profile extends Component{
  render(){
    return(
      <div className="row">            
        <Leftbar />
        <ProfileDisplay 
          id={this.props.id}
          name={this.props.name} 
          slavesID={this.props.slavesID}
          masterID={this.props.masterID}
          introduction={this.props.introduction}
          price={this.props.price}
        />            
      </div>
    );
  }
}

export default App;
