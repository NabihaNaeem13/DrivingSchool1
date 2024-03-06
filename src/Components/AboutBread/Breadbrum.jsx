import { Link } from "react-router-dom"

export const Breadbrum=(props)=>{
    return(
       <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
  <div className="container">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">{props.title}</h1>
      <ul className="breadcumb-menu">
        <li><Link to="/">Home</Link></li>
        <li>{props.title}</li>
      </ul>
    </div>
  </div>
</div>

    )
}