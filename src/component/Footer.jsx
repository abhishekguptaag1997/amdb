import React from 'react'
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <>
            <footer className='text-white' style={{ height: "20vh" }}>
                <div className="container">
                    <div className="row">
                        <span className='text-center' >
                            <img src={logo} alt="logo" style={{ width: "15vh" }} />
                        </span>
                        <h5 className='text-center'>
                            <span className='me-5'><a href=''  style={{textDecoration:"none"}}>Terms and Privacy Notice</a></span>
                            <span ><a href=''  style={{textDecoration:"none"}}>Send Feedback</a></span>
                        </h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
