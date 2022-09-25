import React, { useContext } from "react";
import { AppContext } from "../../Mycontext/text";

export default function Reach() {
    const { color } = useContext(AppContext);
    return (

        <div style={{ color: color ? "white" : "" }} id="Contacts" className="container_contact">
            <h1 className="contact_title" >Contact Us</h1>
            <form action="https://send.pageclip.co/OZqzxRfs7rRdDIIiAm6ZTLsnT66Nf8So/Stocks" class="pageclip-form" className="form " method="post" >
                <div className="holder">
                    <input
                        style={{ border: color ? " 2px solid white" : "" }}
                        type={Text}
                        name="name"
                        data-name="name"
                        required
                        className="input"
                        placeholder="Your Name"
                    />
                    <input
                        style={{ border: color ? " 2px solid white" : "" }}
                        type={Text}
                        name="email"
                        data-name="Email"
                        required
                        className="input"
                        placeholder="Your Email"
                    />
                </div>
                <input
                    style={{ border: color ? " 2px solid white" : "" }}
                    type={Text}
                    name="body"
                    data-name="message"
                    required
                    className="input input_message"
                    placeholder="Your message"
                />
                <div>
                    <button
                        type="submit"
                        className="submit pageclip-form__submit"
                    >
                        get in touch
                    </button>
                </div>

            </form>
        </div>
    )
}