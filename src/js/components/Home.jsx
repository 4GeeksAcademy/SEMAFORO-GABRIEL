import React,{useState,useEffect} from "react";
//create your first component
const Home = () => {
const [color,setColor]=useState("verde") 


useEffect(()=> {

	const interval=setInterval(()=>{
		if(color==="verde"){
			setColor("amarillo")
		} else if(color==="amarillo"){
			setColor("rojo")
		} else if(color==="rojo"){
			setColor("verde")
		}
	    
	},3000)
	return()=>clearInterval(interval)
},)



	return (
		<> 
		<div className="bg-dark w-25 mx-auto mt-5 d-flex flex-column justify-content-center align-items-center py-5"> 
			<p onClick={()=>setColor("verde")} className={`luz rounded-circle ${color==="verde"? "bg-success" : "bg-secondary"}`}></p>
			<p onClick={()=>setColor("amarillo")}className={`luz rounded-circle ${color==="amarillo"? "bg-warning" : "bg-secondary"}`}></p>
			<p onClick={()=>setColor("rojo")}className={`luz rounded-circle ${color==="rojo"? "bg-danger" : "bg-secondary"}`}></p>
		</div>
		</>
	);
};

export default Home;
