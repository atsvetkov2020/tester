import React, { Component } from 'react';
import './App.css';
import Items from "./ui/Items";
import RunningItems from "./ui/RunningItems";
import Schedule from "./ui/Schedule";
import ConfirmDialog from './ui/components/ConfirmDialog';
import Header from "./ui/components/Header";

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
                          <li><a href="#" onClick={this.openAreaHandler.bind(this, "items")}>Items</a></li>
                          <li><a href="#" onClick={this.openAreaHandler.bind(this, "runningItems")}>Running items</a>
                          </li>
                          <li><a href="#" onClick={this.openAreaHandler.bind(this, "schedule")}>Schedule</a></li>
                      </ul>
                  </nav>
                  <article>

                      {this.state.activeArea === "items" ? <Items getItemsHandler={this.getItemsHandler.bind(this)}></Items> : null}
                      {this.state.activeArea === "runningItems" ? <RunningItems></RunningItems> : null}
                      {this.state.activeArea === "schedule" ? <Schedule></Schedule> : null}

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
