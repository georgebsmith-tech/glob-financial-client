import Link from 'next/link'
import SentMessage from '../components/SentMessage/SentMessage'

const AccountManager2 = () => {
    return (
        <div className="container">
            <h3 className="tb f23 mb30 mt20" style={{padding:'5px 10px'}}>Account Manager</h3>
            <div className="mb30" style={{padding:'0 10px'}}>
                <Link href="/account-manager">
                    <a className="tw br5 bg-brand-orange bd-o f20"
                        style={{ padding: "11px 100px", margin:'0'}}>
                        New Message
                    </a>
                </Link>
            </div>
            <SentMessage/>
            <SentMessage/>

        </div>
    )
}


export default AccountManager2;

