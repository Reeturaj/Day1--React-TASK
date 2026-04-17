import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import PropertiesSampleComponent from './prop-sample/ParentComponet.tsx';
import Counter from './prop-sample/UseState.tsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
