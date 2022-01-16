const ErrorText2 = (props) => {
    return ( 
        <small className="error-msg" style={{color: "red"}}>
        <i class="bi bi-x-circle me-1"></i>{props.children}
        </small>
     );
}
 
export default ErrorText2;