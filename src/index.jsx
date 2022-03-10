import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import QuatCentQuat from './pages/QuatCentQuat'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/yannlobjois_11_16022022/">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<QuatCentQuat />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
