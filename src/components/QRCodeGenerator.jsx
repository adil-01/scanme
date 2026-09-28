import { useRef, useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import ColorPicker from './ColorPicker';
import '../styles/qrcode.css';

function QRCodeGenerator() {
  const qrRef = useRef(null);
  const qrInstance = useRef(null);
  const fileInputRef = useRef(null);

  const [url, setUrl] = useState('https://example.com');
  const [fgColor, setFgColor] = useState('#1a1a2e');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [originalLogo, setOriginalLogo] = useState(null); // untouched upload
  const [logo, setLogo] = useState(null);                 // tinted version shown in QR
  const [logoColor, setLogoColor] = useState('#6c5ce7');
  const [logoSize, setLogoSize] = useState(0.4);
  const [dotType, setDotType] = useState('rounded');
  const [downloaded, setDownloaded] = useState(false);

  // Initialize QR instance
  useEffect(() => {
    qrInstance.current = new QRCodeStyling({
      width: 320,
      height: 320,
      type: 'svg',
      data: url || 'https://example.com',
      margin: 12,
      qrOptions: { errorCorrectionLevel: 'H' },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 6,
        imageSize: logoSize,
      },
      dotsOptions: {
        color: fgColor,
        type: dotType,
      },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: {
        color: fgColor,
        type: dotType === 'dots' ? 'dot' : 'extra-rounded',
      },
      cornersDotOptions: { color: fgColor },
    });

    if (qrRef.current) {
      qrInstance.current.append(qrRef.current);
    }
  }, []);

  // Update QR on state change
  useEffect(() => {
    if (!qrInstance.current) return;
    qrInstance.current.update({
      data: url || 'https://example.com',
      dotsOptions: { color: fgColor, type: dotType },
      backgroundOptions: { color: bgColor },
      cornersSquareOptions: {
        color: fgColor,
        type: dotType === 'dots' ? 'dot' : 'extra-rounded',
      },
      cornersDotOptions: { color: fgColor },
      image: logo || undefined,
      imageOptions: { imageSize: logoSize, margin: 6, crossOrigin: 'anonymous' },
    });
  }, [url, fgColor, bgColor, logo, logoSize, dotType]);

  // ---- Helpers ----
  const hexToRgb = (hex) => {
    let h = hex.replace('#', '').trim();
    if (h.length === 3) {
      h = h.split('').map((c) => c + c).join('');
    }
    return [
      parseInt(h.substring(0, 2), 16),
      parseInt(h.substring(2, 4), 16),
      parseInt(h.substring(4, 6), 16),
    ];
  };

  /**
   * Recolor a logo image on a canvas.
   * - Transparent pixels stay transparent.
   * - Pixels darker than `threshold` (i.e. the "ink") get tinted to `color`.
   * - Light pixels (background of a white-bg logo) stay transparent too.
   */
  const applyLogoColor = (imgSrc, color) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const [r, g, b] = hexToRgb(color);

        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3];

          // Fully transparent → skip
          if (alpha === 0) continue;

          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;

          // Treat near-white as transparent (helps with JPGs / white-bg logos)
          if (brightness > 240) {
            data[i + 3] = 0;
            continue;
          }

          // Tint the "ink" using the alpha as the mask strength
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          // keep existing alpha so edges stay smooth
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => resolve(imgSrc); // fail-safe
      img.src = imgSrc;
    });
  };

  // ---- Handlers ----
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const src = ev.target.result;
      setOriginalLogo(src);
      // Immediately tint with the current logoColor
      const tinted = await applyLogoColor(src, logoColor);
      setLogo(tinted);
    };
    reader.readAsDataURL(file);
  };

  // 🔥 Live recolor: whenever logoColor changes, re-tint from the ORIGINAL
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!originalLogo) return;
      const tinted = await applyLogoColor(originalLogo, logoColor);
      if (!cancelled) setLogo(tinted);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [logoColor, originalLogo]);

  const handleDownload = async () => {
    if (!qrInstance.current) return;
    await qrInstance.current.download({ name: 'scan-me-code', extension: 'png' });
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const removeLogo = () => {
    setLogo(null);
    setOriginalLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const dotTypes = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];

  return (
    <div className="qr-generator">
      <div className="qr-preview-card">
        <div className="qr-preview-header">
          <h3>Live Preview</h3>
          <span className="preview-badge">Real-time</span>
        </div>
        <div className="qr-canvas-wrap">
          <div ref={qrRef} className="qr-canvas"></div>
        </div>
        <button className="btn-download" onClick={handleDownload}>
          {downloaded ? '✓ Downloaded!' : '⬇ Download PNG'}
        </button>
      </div>

      <div className="qr-controls">
        <div className="control-group">
          <label className="control-label">Destination URL</label>
          <input
            type="url"
            className="url-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-website.com"
          />
        </div>

        <div className="control-row">
          <ColorPicker label="Foreground" value={fgColor} onChange={setFgColor} />
          <ColorPicker label="Background" value={bgColor} onChange={setBgColor} />
        </div>

        <div className="control-group">
          <label className="control-label">Pattern Style</label>
          <div className="dot-type-grid">
            {dotTypes.map((type) => (
              <button
                key={type}
                className={`dot-btn ${dotType === type ? 'active' : ''}`}
                onClick={() => setDotType(type)}
              >
                {type.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">Center Logo</label>
          <div className="logo-controls">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml"
              onChange={handleLogoUpload}
              id="logo-upload"
              className="file-input"
            />
            <label htmlFor="logo-upload" className="file-label">
              📁 {logo ? 'Change Logo' : 'Upload Logo'}
            </label>
            {logo && (
              <button className="btn-remove" onClick={removeLogo}>✕ Remove</button>
            )}
          </div>

          {logo && (
            <>
              <div className="control-row" style={{ marginTop: '18px' }}>
                <ColorPicker label="Logo Color" value={logoColor} onChange={setLogoColor} />

                <div className="color-picker">
                  <label className="control-label">
                    Logo Size <span className="value-badge">{Math.round(logoSize * 100)}%</span>
                  </label>
                  <div className="range-wrapper">
                    <input
                      type="range"
                      min="0.2"
                      max="0.55"
                      step="0.05"
                      value={logoSize}
                      onChange={(e) => setLogoSize(parseFloat(e.target.value))}
                      className="range-input"
                    />
                  </div>
                </div>
              </div>

              {/* <p className="hint">
                Tip: Changing the logo color updates live — no re-upload needed.
              </p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;