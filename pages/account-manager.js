import Link from 'next/link'
import SentMessage from '../components/SentMessage/SentMessage'

const AccountManager = () => {
    return (
        <div className="container">
            <h3 className="tb mb10 mt20" style={{padding:'5px 10px', fontSize:'20px'}}>Account Manager</h3>
            <div className="" style={{backgroundColor:'#8BBD4380', padding:'15px 40px'}}>
                <h3 className="tb" style={{fontSize:'17px'}}>Write new message</h3>
                <form action="">
                    <div className="mb20 mt30">
                        <label
                            className=" block mb10 tb bolder"
                            style={{fontSize:'14px'}}
                            htmlFor="">
                            Recipient
                        </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                opacity:'0.5',
                                border: "1px solid rgba(139, 189, 67, 0.5)"
                            }}

                        />
                    </div>
                    <div className="f16 mb20 mt30">
                        <label
                            className="block mb10 tb bolder"
                            style={{fontSize:'14px'}}
                            htmlFor="">
                            New Message
                        </label>
                        <textarea name="" id="" rows="15" className="fw br5 f16 t-grey3 "
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                opacity:'0.5',
                                border: "1px solid rgba(139, 189, 67, 0.5)"
                            }}></textarea>
                    </div>
                    <div className="mt10">
                    <Link href="/account-manager">
                        <a className="tw br5 bg-brand-orange bd-o block center-text"
                            style={{ padding: "8px", margin:'0 15%', width:'70%', fontSize:'20px'}}>
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
