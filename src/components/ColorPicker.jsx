import React from 'react';
import '../styles/colorpicker.css';

const PRESETS = [
  '#1a1a2e', '#6c5ce7', '#e74c3c', '#00b894',
  '#0984e3', '#fdcb6e', '#e17055', '#2d3436',
  '#ffffff', '#dfe6e9',
];

function ColorPicker({ label, value, onChange }) {
  return (
    <div className="color-picker">
      <label className="control-label">{label}</label>
      <div className="color-input-row">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="color-swatch"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="color-text"
          maxLength={7}
        />
      </div>
      <div className="color-presets">
        {PRESETS.map((c) => (
          <button
            key={c}
            className={`preset-dot ${value.toLowerCase() === c.toLowerCase() ? 'active' : ''}`}
            style={{ background: c }}
            onClick={() => onChange(c)}
            aria-label={`Pick ${c}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;