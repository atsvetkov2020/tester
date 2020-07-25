import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from "./ui/Items";
import RunningItems from "./ui/RunningItems";
import Schedule from "./ui/Schedule";
import ConfirmDialog from './ui/components/ConfirmDialog';
import Header from "./ui/components/Header";

class App extends Component{
  state = {
      activeArea: "items"
  }

  openAreaHandler(area: string) {
      this.setState({"activeArea": area});
  }

  getItemsHandler(){
      return [
          {
              "id": "Group55Test01",
              "name": "Group55Test01",
              "group-id": "Group55",
              "group-name": "Group55",
              "status": "unknown"
          },
          {
              "id": "Group55Test02",
              "name": "Group55Test02",
              "group-id": "Group55",
              "group-name": "Group55",
              "status": "pass"
          },
          {
              "id": "Group55Test03",
              "name": "Group55Test03",
              "group-id": "Group55",
              "group-name": "Group55",
              "status": "fail"
          },
          {
              "id": "Group56Test01",
              "name": "Group56Test01",
              "group-id": "Group56",
              "group-name": "Group56",
              "status": "error"
          },
          {
              "id": "Group57Test01",
              "name": "Group57Test01",
              "group-id": "Group57",
              "group-name": "Group57",
              "status": "disabled"
          },
          {
              "id": "Group57Test02",
              "name": "Group57Test02",
              "group-id": "Group57",
              "group-name": "Group57",
              "status": "test"
          }
      ];
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

                      {this.state.activeArea === "items" ? <Items getItemsHandler={this.getItemsHandler}></Items> : null}
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
