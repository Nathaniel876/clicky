import React from "react";
import Picture from "./Pic";
import pic from "./pics.json"
import './Game.css';

let points = 0;
let highestScore = 0;


class Clicky extends React.Component {
    state = {
        pic,
        highestScore,
        points,
    };

    setClicked = id => {
        const picClicked = pic.filter(pic => pic.id === id);

        if (picClicked[0].clicked) {

            points = 0;

            for (let i = 0; i < pic.length; i++) {
                pic[i].clicked = false;
            }

            this.setState({ points });
            this.setState({ pic });

        } else {
            picClicked[0].clicked = true;

            points = points + 1;

            if (points > highestScore) {
                highestScore = points;
                this.setState({ highestScore });
            }

            pic.sort((a, b) => {
                return 0 - Math.random();
            });

            this.setState({ pic });
            this.setState({ points });
        }
    };

    render() {

        return (
            <div>
                <div className="hero">
                    <div className="heroText">
                        <h1 className="banner">Clicky Game</h1>
                        <h3 className="rules">Dont Click Same Pic Twice</h3>
                        <h4 className="hs">Highest Score: {this.state.highestScore}</h4>
                        <h4 className="psf">Score So Far: {this.state.points}</h4>
                    </div>
                </div>
                <div className="row panel">
                    {this.state.pic.map(pic => (
                        <Picture
                            setClicked={this.setClicked}
                            id={pic.id}
                            key={pic.id}
                            image={pic.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Clicky;
