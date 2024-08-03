

function UserGreeting(props){
/**
 * part 1
 */

    // if(props.isLogged){
    //     return<h2>
    //         Welcome {props.userName}
    //         <h5>how are you</h5>
    //     </h2>
    // }else{
    //     return<h2>Please log in to the content</h2>
    // }

    /**
     * part 2
     */

    // return(props.isLogged? <h2 className="msg1">Welcome {props.userName}</h2> : <h2 className ="msg2">Please log again</h2>);

    /**
     * part 3
     */

    const welcomMsg= <h2 className="msg1">
                     Welcome {props.userName}
                     </h2>

       const returnMsg=<h2 className ="msg2">Please log again</h2>
       
       return (props.isLogged ?welcomMsg :returnMsg)

}
export default UserGreeting