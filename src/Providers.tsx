import { LanguageProvider } from 'contexts/Localization';
import { ToastsProvider } from 'contexts/ToastsContext';
import React from 'react';
import { Provider } from 'react-redux';
import { ModalProvider } from 'styled-react-modal'
import store from './store';
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
      <Provider store= {store} >
        <ToastsProvider>
          <ThemeContextProvider>
            <LanguageProvider>
              <ModalProvider>
                {children}
              </ModalProvider>
            </LanguageProvider>
          </ThemeContextProvider>
        </ToastsProvider>
      </Provider>
  )
}

export default Providers;
