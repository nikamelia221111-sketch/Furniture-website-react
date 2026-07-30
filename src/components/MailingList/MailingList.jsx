import './MailingList.css'



function MailingList () {
    return(
        <>
        <section className="Join-Our-Mailing-List">
            <div>
                <h2>Join Our Mailing List</h2>
                <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
            </div>
            <form className="email-form-container" action="#" method="post">
                <input type="email" placeholder="example@gmail.com" aria-label="Email address"/>
                <button type="submit">Submit</button>
            </form>
        </section>
        </>
    )
}


export default MailingList