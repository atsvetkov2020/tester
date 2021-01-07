import React, { Component } from 'react';
import './App.css';
import Items from "./ui/Items";
import RunningItems from "./ui/RunningItems";
import Schedule from "./ui/Schedule";
import ConfirmDialog from './ui/components/ConfirmDialog';
import Header from "./ui/components/Header";
import { Link, Route } from 'react-router-dom';

class App extends Component{
  state = {
      activeArea: "items",
      items: []
  }

  componentDidMount() {
    fetch('/api/v1/tester/items')
        .then(res => res.json())
        .then((data) => {
            this.setState({ items: data })
        })
        .catch(console.log)
  }

  openAreaHandler(area: string) {
      this.setState({"activeArea": area});
  }

  getItemsHandler(){
      return this.state.items;
  }

  render() {
      return (
          <div className="box">
             <Header title="Tester"></Header>
              <section>
                  <nav>
                      <ul>
                          <li><Link to="/">Items link</Link></li>
                          <li><Link to="/running">Running items link</Link></li>
                          <li><Link to="/schedule">Schedule link</Link></li>
                      </ul>
                  </nav>
                  <article>
                    <Route path='/' exact render={(props) => (
                        <Items {...props} getItemsHandler={this.getItemsHandler.bind(this)} />
                    )}></Route>
                    <Route path="/running" component={RunningItems}></Route>
                    <Route path="/schedule" component={Schedule}></Route>
                    <ConfirmDialog></ConfirmDialog>
                  </article>
              </section>
              <footer>
                  <p></p>
              </footer>
          </div>
      );
  }
}

export default App;
