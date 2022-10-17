import React, {useState} from "react";
import "/workspace/trafic-lights/src/js/component/home.css";


 const Home = () => {
const[selectedColor, setSelectedColor]= useState("green"); 




	return (
		<div>
		<div className="container">
		<div className="stick"></div>
		<div className="traffic-light">
			<div onClick= {() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div onClick= {() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick= {() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
		</div>
		</div>
	);
};

export default Home;





/* import React, {useState} from "react";
import "/workspace/trafic-lights/src/js/component/home.css";


 const Home = () => {
const[selectedColor, setSelectedColor]= useState("green"); 


	return (
		<div>
		<div className="container">
		<div className="stick"></div>
		<div className="traffic-light">
			<div onClick= {() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div onClick= {() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick= {() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
		</div>
		</div>
	);
};

export default Home; */

