import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from "./ui/Items";
import RunningItems from "./ui/RunningItems";
import Schedule from "./ui/Schedule";
import ConfirmDialog from './ui/components/ConfirmDialog';

class App extends Component{
  state = {
      activeArea: "items"
  }

  openAreaHandler(area: string) {
      this.setState({"activeArea": area});
  }

  render() {
      return (
          <div className="">
              <header className="">
                  <h2>Tester</h2>
              </header>
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

                      {this.state.activeArea === "items" ? <Items></Items> : null}
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
