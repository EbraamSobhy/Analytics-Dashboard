function Lines() {
    return(
        <div>
            <p style={{fontFamily:"roboto"}} className="w3-xlarge w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Top 5 Products</b></p>
            <p style={{padding:"1px", fontFamily:"roboto"}}>Apple</p>
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal w3-center" style={{height:"24px",width:"100%"}}>100%</div>
            </div>
            <div>
            <p style={{padding:"1px",fontFamily:"roboto"}}>Samsung</p>
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal w3-center"style={{height:"24px",width:"85%"}}>85%</div>
            </div>
            <p style={{padding:"1px",fontFamily:"roboto"}}>Xiaomi</p>
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal w3-center" style={{height:"24px",width:"75%"}}>75%</div>
            </div>
            <p style={{padding:"1px",fontFamily:"roboto"}}>Huawei</p>
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal w3-center" style={{height:"24px",width:"65%"}}>65%</div>
            </div>
            <p style={{padding:"1px",fontFamily:"roboto"}}>Google Pixels</p>
            <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal w3-center" style={{height:"24px",width:"50%"}}>50%</div>
            </div>
            </div>
        </div>
    );
}

export default Lines;