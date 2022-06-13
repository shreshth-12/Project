import React from 'react'

export const About = () => {
    let myStyle1 = {
        minHeight: "10vh",
        margin: "40px auto"
    }
    let myStyle2 = {
        minHeight: "55vh",
        margin: "40px auto"
    }
    return (
        <>
        <div className="container" style={myStyle1}>
            <h1>Welcome to MyTodosList.com</h1>
        </div>
        <div className="container" style={myStyle2}>
                <p >
                    This is my first react-project namely: MyTodosList.com. Using this website you can add some todos- means the work that you're needed to do in future. You can add them up here, so that you will not forget them and once you've done the todo, you can delete the todo also!
                </p>
        </div>
        </>
    )
}
