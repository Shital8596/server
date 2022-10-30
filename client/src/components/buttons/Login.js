import React,{useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/ContextProvider'

function Login() {
    const navigate = useNavigate()
    const { account, setAccount } = useContext(LoginContext)

    const sendData = async (e) => {
        e.preventDefault()
        const { email, password } = e.target
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        const data = await res.json()
        console.log(data)
        if (res.status == 400 || !data) {
            alert("Invalid username or password")
        } else {
            alert("Your are logged in 🤩!")
            setAccount(data)
        }

        document.getElementById("formId").reset()
        // document.getElementsByClassName("modal").style.display = "false"
    }

    


    return (
        <>
            <button
                type="button"
                className="btn btn-outline-success ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
            >
                 <span className='fa fa-sign-in me-1'></span> Login
            </button>
            {/* Modal */}
            <div
                className="modal "
                id="loginModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Login
                            </h5>
                            <button
                                id="closeBtn"
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100 mb-4'> <span className='fa fa-google me-2'></span>SignIn with google</button>
                            <button className='btn btn-primary w-100 mb-4'> <span className='fa fa-facebook me-2'></span>SignIn with facebook</button>
                            <form action='/Home' method='POST' onSubmit={sendData} id="formId">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                    <button type="submit" className="btn btn-outline-primary w-100" onClick={()=>navigate("/")}>
                                        Submit
                                    </button>
                                <div id="registerHelp" className="form-text">
                                    If you do not have account then <NavLink to="/SignUp">Register</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login