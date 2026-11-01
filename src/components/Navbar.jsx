import { Link, useNavigate } from "react-router"
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import useScroll from "../hooks/useScroll";

function Navbar () {

    const {user, changeUser}=useContext(UserContext);
    const redirect = useNavigate();
    const [scrolled, scrollY] = useScroll();

    function logout () {
        changeUser("");
        redirect('/');
    }

    return (
        <>
<div ref={scrolled} className="max-lg:collapse bg-base-200 lg:mb-30 shadow-sm w-full rounded-md sticky top-0">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className={scrollY > 0 ? "collapse-title navbar bg-red-400 h-[10vh]" : "collapse-title navbar "}>
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">Aulab</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={'/'}><strong>Home</strong></Link></li>
        <li><Link to={'/posts'}><strong>Posts & users</strong></Link></li>
        {(!user &&  <>
        <li><Link to={'/login'}><strong>Login</strong></Link></li>
        <li><Link to={'/register'}><strong>Register</strong></Link></li>
        </> ) || (<>
        <li><Link to={`/user/${user.nome}`}><strong>User: {user.nome}</strong></Link></li>
        <li><p onClick={logout}>Logout</p></li>                    
        </>)}
      </ul>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
        <li><Link to={'/'}><strong>Home</strong></Link></li>
        <li><Link to={'/posts'}><strong>Posts & users</strong></Link></li>
        {(!user && <li><Link to={'/login'}><strong>Login</strong></Link></li>) ||
        (<>
        <li><Link to={`/user/${user.nome}`}><strong>User: {user.nome}</strong></Link></li>
        <li><p onClick={logout}>Logout</p></li>                    
        </>)}
    </ul>
  </div>
</div>
        </>
    )
}

export default Navbar

