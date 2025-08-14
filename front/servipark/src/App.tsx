import './App.css'

function App() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mb-4">Sistema de Estacionamento</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Cadastro de Veículo</h4>
                        </div>
                        <div className="card-body">
                            <form id="vehicleForm">
                                <div className="form-group">
                                    <label htmlFor="placa">Placa do Veículo*</label>
                                    <input type="text" className="form-control" id="placa" name="placa" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modelo">Modelo do Veículo*</label>
                                    <input type="text" className="form-control" id="modelo" name="modelo" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ano">Ano*</label>
                                    <input type="number" className="form-control" id="ano" name="ano" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nomeCondutor">Nome do Condutor*</label>
                                    <input type="text" className="form-control" id="nomeCondutor" name="nomeCondutor" required />
                                </div>
                                <button type="submit" className="btn btn-primary" id="saveBtn">Cadastrar</button>
                                <button type="button" className="btn btn-secondary" id="cancelBtn" style={{ display: 'none' }}>Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default App
