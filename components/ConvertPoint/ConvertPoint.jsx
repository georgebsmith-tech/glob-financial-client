import Link from 'next/link'
export default function ConvertPoint(){
    return (
        <div className="v-shadow mt20" style={{padding:'30px 10px'}}>
            <div className="mb20 flex flex-cols" style={{margin:'0 15%'}}>
                <h3 className="mb15 f20">Convert Point</h3>
                <h3 className="f18 mb20" style={{color:'#8BBD43'}}>I want to convert</h3>
                <input
                    placeholder="Input Point"
                    className="br5 f16 bolder"
                    style={{
                        padding: "17px",
                        width:'100%',
                        border:'1px solid #707070',
                        color:'#CCCCCC',
                        opacity:'0.5'
                    }}
                />
            </div>
            <div className="mb20 mt20 center-text">
                <p className="f17 bolder mb10">Cash Equivalent</p>
                <h3 className="f28 tb">$_ _</h3>

            </div>
            <Link href="/account-manager">
                <a className="tw br5 bg-brand-orange bd-o block f20 center-text"
                    style={{ padding: "8px", margin:'0 15% ', width:'70%'}}>
                    Convert Point
                </a>
            </Link>
        </div>             
    )
}