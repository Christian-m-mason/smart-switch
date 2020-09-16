import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      hueUsername: "HzViDqYngkvwsz0Oegr8Pjm5kv1dDWifONT80Eg-",
      rooms: {
        bedroom: ["Shelbys Nightstand", "Christians Nightstand"],
        livingRoom: ["Livingroom Lamp"],
      },
      lights: [],
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  componentDidMount() {
    fetch(`http://10.0.0.56/api/${this.state.hueUsername}/lights`)
      .then((data) => data.json())
      .then((lights) => {
        const objKeys = Object.keys(lights);
        const lightsArr = Object.values(lights);

        objKeys.forEach((key, indx) => {
          lightsArr[indx].id = key;
        });

        this.setState({ lights: lightsArr });
      });
  }

  handleButtonPress(e) {
    const indx = e.currentTarget.getAttribute("id");

    const putMethod = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        on: !this.state.lights[indx].state.on,
      }),
    };

    fetch(
      `http://10.0.0.56/api/${this.state.hueUsername}/lights/${this.state.lights[indx].id}/state`,
      putMethod
    )
      .then((res) => res.json())
      .then((data) => {
        const lights = this.state.lights;
        lights[indx].state.on = !lights[indx].state.on;
        this.setState({ lights });
      });
  }
  render() {
    return (
      <div className="screen-container">
        <div className="switch-label">
          <h1>Bedroom</h1>
        </div>
        <div className="control-center">
          <div className="thermostat">
            <h1>Nest</h1>
          </div>
          {this.state.lights.map((light, indx) =>
            indx !== 1 ? (
              <Button
                handleButtonClick={(e) => this.handleButtonPress(e)}
                key={indx}
                index={indx}
                {...light}
              />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default App;
