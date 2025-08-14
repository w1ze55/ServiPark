import './App.css'

function App() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mb-4">Park System</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
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
                                    <label htmlFor="driverName">Driver name*</label>
                                    <input type="text" className="form-control" id="driverName" name="driverName" required />
                                </div>
                                <button type="submit" className="btn btn-primary" id="saveBtn">Register</button>
                                <button type="button" className="btn btn-secondary" id="cancelBtn" style={{ display: 'none' }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4>Registered vehicles</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped">
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
        </div>
    )
}

export default App
