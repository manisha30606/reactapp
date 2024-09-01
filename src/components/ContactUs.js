import "./ContactUsStyles.css";


function ContactUs(){
    return(

        <div className="form-container">
        <h1>Send me a message to Us!</h1>
        <form>
            <input placeholder="Name" />
            <input placeholder="E-mail" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
<<<<<<< HEAD
          <button className="btn">Send Message</button>
=======
          <button className = "btn">Send Message</button>
>>>>>>> 73ee2943eb44ac4b88fb6984b12fa5c24fb588f7
        </form>
        </div>
    )
}

export default ContactUs;
