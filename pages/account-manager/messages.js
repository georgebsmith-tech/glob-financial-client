import Link from 'next/link'
import SentMessage from '../../components/SentMessage/SentMessage'
import {withRouter} from 'next/router'


const AccountManagerMsgs=withRouter((props)=>{
  return(
        <div className="container">
            <h3 className="tb f20 mb20 mt20" style={{padding:'5px 10px'}}>Account Manager</h3>
            <div className="mb30" style={{padding:'0 10px'}}>
                <Link href="/account-manager">
                    <a className="tw br5 bg-brand-orange bd-o block f17 center-text"
                        style={{ padding: "11px", width:'70%'}}>
                        New Message
                    </a>
                </Link>
            </div>
            <SentMessage/>
            <SentMessage/>

        </div>
  )
})


export default withRouter(AccountManagerMsgs)

