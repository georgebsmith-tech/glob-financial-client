import Link from 'next/link'

const AccountManager = () => {
    return (
        <div className="container">
            <h3 className="tb f23 mb10 mt20" style={{padding:'5px 10px'}}>Account Manager</h3>
            <div className="" style={{backgroundColor:'#8BBD4380', padding:'15px 40px'}}>
                <h3 className="tb f20" >Write new message</h3>
                <form action="">
                    <div className="f16 mb20 mt30">
                        <label
                            className=" block mb10 tb f20"
                            htmlFor="">
                            Recipient
                        </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "#00000029",
                                opacity:'0.5',
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                        />
                    </div>
                    <div className="f16 mb20 mt30">
                        <label
                            className="block mb10 tb f20"
                            htmlFor="">
                            New Message
                        </label>
                        <textarea name="" id="" rows="15" className="fw br5 f16 t-grey3 "
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "#00000029",
                                opacity:'0.5',
                                border: "1px solid rgba(250,250,250,1)"}}></textarea>
                    </div>
                    <div className="center-text mt10">
                    <Link href="/account-manager">
                        <a className="tw br5 bg-brand-orange bd-o block f20 center-text"
                            style={{ padding: "11px", margin:'0 15%', width:'70%'}}>
                            Send Message
                        </a>
                    </Link>
                </div>
                </form>
            </div>
        </div>
    )
}


export default AccountManager;