function Table() {
    return(
        <div style={{ overflowX: 'auto' }}>
        <p style={{fontFamily:"roboto", fontWeight:"bolder"}}>Google Search Console</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Keyword</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Clicks</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Impressions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ padding: '8px' }}>How much is the iPhone 15?</td>
                    <td style={{ padding: '8px' }}>282</td>
                    <td style={{ padding: '8px' }}>2,956</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px' }}>how much samsung s10?</td>
                    <td style={{ padding: '8px' }}>276</td>
                    <td style={{ padding: '8px' }}>1,236</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px' }}>how much space in iphone 14?</td>
                    <td style={{ padding: '8px' }}>268</td>
                    <td style={{ padding: '8px' }}>2,676</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px' }}>how much xiaomi 13 pro?</td>
                    <td style={{ padding: '8px' }}>256</td>
                    <td style={{ padding: '8px' }}>5,767</td>
                </tr>
                <tr>
                    <td style={{ padding: '8px' }}>how much space in Oppo A57?</td>
                    <td style={{ padding: '8px' }}>226</td>
                    <td style={{ padding: '8px' }}>1,380</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Table;