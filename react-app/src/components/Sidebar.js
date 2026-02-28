
function Sidebar({ config, setConfig, onRunSimulation, mlReady, loading, modelSource, onRetrain }) {
  const handlePriceChange = (e) => {
    setConfig({ ...config, price: parseInt(e.target.value) });
  };

  const handleSugarFreeToggle = (value) => {
    setConfig({ ...config, sugarFree: value });
  };

  const handlePackagingChange = (e) => {
    setConfig({ ...config, packaging: e.target.value });
  };

  const handleInfluencerToggle = (value) => {
    setConfig({ ...config, influencer: value });
  };

  const statusText = () => {
    if (!mlReady) return modelSource === null ? '🔄 Training ML model from scratch...' : '🔄 Loading model...';
    if (modelSource === 'loaded') return '⚡ ML model loaded from cache — instant start!';
    return '✅ ML model trained (1,600 scenarios) and saved.';
  };

  const statusClass = !mlReady ? 'ml-status training' : modelSource === 'loaded' ? 'ml-status cached' : 'ml-status ready';

  return (
    <div className="sidebar">
      <div className={statusClass}>
        {statusText()}
      </div>

      <h2>Product Configuration</h2>

      <div className="input-group">
        <label>Price (INR)</label>
        <input
          type="range"
          min="299"
          max="599"
          step="10"
          value={config.price}
          onChange={handlePriceChange}
        />
        <div className="value-display">₹{config.price}</div>
      </div>

      <div className="input-group">
        <label>Sugar-Free Option</label>
        <div className="toggle-group">
          <button
            className={`toggle-btn ${!config.sugarFree ? 'active' : ''}`}
            onClick={() => handleSugarFreeToggle(false)}
          >
            No
          </button>
          <button
            className={`toggle-btn ${config.sugarFree ? 'active' : ''}`}
            onClick={() => handleSugarFreeToggle(true)}
          >
            Yes
          </button>
        </div>
      </div>

      <div className="input-group">
        <label>Packaging Type</label>
        <select value={config.packaging} onChange={handlePackagingChange}>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className="input-group">
        <label>Influencer Marketing Campaign</label>
        <div className="toggle-group">
          <button
            className={`toggle-btn ${!config.influencer ? 'active' : ''}`}
            onClick={() => handleInfluencerToggle(false)}
          >
            No
          </button>
          <button
            className={`toggle-btn ${config.influencer ? 'active' : ''}`}
            onClick={() => handleInfluencerToggle(true)}
          >
            Yes
          </button>
        </div>
      </div>

      <button
        className="run-btn"
        onClick={onRunSimulation}
        disabled={!mlReady || loading}
      >
        {loading ? '⏳ Running...' : '🚀 Run ML Simulation'}
      </button>

      {mlReady && (
        <button
          className="retrain-btn"
          onClick={onRetrain}
          disabled={loading}
          title="Clears saved model and retrains from scratch"
        >
          🔄 Retrain Model
        </button>
      )}
    </div>
  );
}

export default Sidebar;
