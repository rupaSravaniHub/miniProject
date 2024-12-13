import { useContext } from "react";
import { Context } from "../App";
const AllModules =() =>
    {
    const { modulesList, setmodulesList, addModule, setaddmodule }=useContext(Context);
    
       const addModuleHandle = () => {
        setaddmodule(true);
        setmodulesList(false);
    }
        return(
            <>
           <div class="d-flex">
                            <button style={{ backgroundColor: 'rgb(2, 105, 165)' }} class="btn mt-2 ms-auto"
                                onClick={addModuleHandle}>
                                <i style={{ color: 'white' }} class="bi bi-plus"></i>
                                <span style={{ color: 'white' }} >Add</span>
                            </button>
                        </div>
                        <table class="table mt-1">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">S.NO</th>
                                    <th scope="col">ModuleName</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td> <i class="bi bi-eye"></i>  <i class="bi bi-pencil"></i>  <i class="bi bi-trash"></i></td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="d-flex">
                        <div class="pages d-flex align-items-center" style={{gap: "1rem"}}>
                            <span>Show</span>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" style={{border:'1px solid black'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    10
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" >Action</a>
                                    <a class="dropdown-item">Another action</a>
                                    <a class="dropdown-item" >Something else here</a>
                                </div>
                            </div>
                            <span>Entries</span>
                        </div>
                        <div class='paginationButtons ms-auto'>
                            <button type="button" class="btn"><i class="bi bi-chevron-double-left"></i></button>
                            <button type="button" class="btn"><i class="bi bi-chevron-left"></i>   </button>
                            <button type="button" class="btn">1</button>
                            <button type="button" class="btn">2</button>
                            <button type="button" class="btn">3</button>
                            <button type="button" class="btn">...</button>
                            <button type="button" class="btn">10</button>
                            <button type="button" class="btn"><i class="bi bi-chevron-double-right"></i></button>
                            <button type="button" class="btn"><i class="bi bi-chevron-right"></i>  </button>
                        </div>
                        </div>
            </>
        );
    }
    export default AllModules;