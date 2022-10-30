import React from 'react'

function SignUp() {

    const sendData = async (e) => {
        e.preventDefault()
        const {name, email, mobile,password, cpassword } = e.target

        const res = await fetch("register", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name : name.value, 
                email : email.value,
                mobile : mobile.value,
                password : password.value,
                cpassword : cpassword.value
            })
        })
        const data = await res.json()
        if(res.status === 422 || !data){
            alert("Please fill the entire data")
        }else{
            alert("Your account is created successfully!")
        }
        // console.log(data)
    }

    return (
        <>
            {/* Button trigger modal */}
            <button
                type="button"
                className="btn btn-outline-success ms-2"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
            >
                <span className='fa fa-user-plus me-1'></span>   Register
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="signUpModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Register
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100 mb-4'> <span className='fa fa-google me-2'></span>Sign up with google</button>
                            <button className='btn btn-primary w-100 mb-4'> <span className='fa fa-facebook me-2'></span>Sign up with facebook</button>
                            <form method='POST' onSubmit={sendData}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInput"
                                        name='name'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name='email'
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Mobile
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name='mobile'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name='password'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        name='cpassword'
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp