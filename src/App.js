import React, {useState, useRef} from 'react';
import QrReader from 'react-qr-reader';


function App() { 
  const [scanResultFile, setScanResultFile] = useState('');
  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
      if (result) {
          setScanResultFile(result);
      }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }  

  return (
    <div className={'App-header container'}>
      <h2 className={'title'}>ENTRADAS EVENTOS CULTURALES</h2>

        <button className={'btn btn-danger'} onClick={onScanFile}>Scannear CODIGO QR</button>
        <QrReader
          ref={qrRef}
          delay={300}
          style={{width: '0%'}}
          onError={handleErrorFile}
          onScan={handleScanFile}
          legacyMode
        />
        <h3>{scanResultFile ? scanResultFile : null}</h3>
    </div>
  );
}

export default App;
