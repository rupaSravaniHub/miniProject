import '../style/addModule.css';
const AddModule =() =>
    {
        return(
            <>
            <div className="addModBody">
            <table>
                    <tr>
                        <td>Name<span style={{color:'red'}}>*</span></td>
                        <td><input type="text" placeholder="Enter Here" style={{width:'50%'}}></input></td>
                    </tr>
                    <tr>
                    <td>Description<span style={{color:'red'}}>*</span></td>
                    <td><input type="text" placeholder="Enter Here" style={{width:'50%'}}></input></td>
                    </tr>
            </table>
            <div className='config'>
            <span>Configuration </span>
            <i style={{ color:'rgb(2, 105, 165)' }} class="bi bi-plus"></i>
            </div>
            <table>
                <tr>
                    <td>Input</td>
                    <td><input type="text" placeholder="Enter Here"></input></td>
                    <td>Value</td>
                    <td><input type="text" placeholder="Enter Here"></input></td>
                </tr>
            </table>
            </div>
            </>
        );
    }
    export default AddModule;