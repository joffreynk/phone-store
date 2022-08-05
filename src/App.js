import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhoneBrands from './components/PhoneBrands';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneBrands />} />
          <Route path="/:slug" element={<PhoneDetails />} />
          <Route path="*" element={<PhoneBrands />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
