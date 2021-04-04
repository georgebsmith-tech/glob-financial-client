const SentMessage = () => {
    return (
        <div className="bd5" style={{padding:'0 10px', background:'#cbe4a6'}}>
            <div style={{backgroundColor:'#8BBD4380', marginBottom:'10px'}} className="flex p15 bd5">
                <div className="mb10 mr20" style={{ width: 70, alignSelf:'center'}}>
                <img
                    style={{ width: "100%"}}
                    src="../images/home-client.png" alt="" />
                </div>      
                <div style={{alignSelf:'center'}}>
                    <h3 className="tb f18 mb5" style={{padding:'0 5px'}}>Account Manager</h3>
                    <p className="f16 bolder">New messages</p>
                </div>
            </div>
        </div>
    )
}
export default SentMessage