import './App.css'

function App() {
    return (
        <div className="general-content">
            <div className="main-title">
                <h1 className="title">ServiPark</h1>
                <h2 className='subtitle'>System for vehicle parking</h2>
            </div>

            <div className="subgeneral-content">
                <div className="information-content">
                    <div className="card-title">
                        <h4>Register vehicle</h4>
                    </div>
                    <div className="card-body">
                        <form id="vehicleForm">
                            <div className="form-group">
                                <label htmlFor="plate">Vehicle plate*</label>
                                <input type="text" className="form-control" id="plate" name="plate" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="model">Vehicle model*</label>
                                <input type="text" className="form-control" id="model" name="model" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year*</label>
                                <input type="number" className="form-control" id="year" name="year" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="driverName">Name of the driver*</label>
                                <input type="text" className="form-control" id="driverName" name="driverName" required />
                            </div>
                            <button type="submit" className="btn btn-primary" id="saveBtn">Register</button>
                            <button type="button" className="btn btn-secondary" id="cancelBtn" style={{ display: 'none' }}>Cancel</button>
                        </form>
                    </div>
                </div>
                <div className="information-content">
                    <div className="card-title">
                        <h4>Registered vehicles</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Plate</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                        <th>Driver</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="vehicleList">
                                    {/* Vehicle data will be loaded here */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
