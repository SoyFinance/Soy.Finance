import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@soy-libs/uikit'
import { ToastListener } from 'contexts/ToastsContext';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import PageLoader from './components/PageLoader'
import GlobalStyle from './style/Global'
import history from './routerHistory'

const Home = lazy(() => import('./pages'));
const Safelist = lazy(() => import('./pages/Safelist'));
const Tokenomic = lazy(() => import('./pages/Tokenomic'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Airdrop = lazy(() => import('./pages/Airdrop'));

const App: React.FC = () => {

    return (
        <Router history={history}>
            <ResetCSS />
            <GlobalStyle />
            <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/safelist" exact>
                        <Safelist />
                    </Route>
                    <Route path="/tokenomic" exact>
                        <Tokenomic />
                    </Route>
                    <Route path="/roadmap" exact>
                        <Roadmap />
                    </Route>
                    <Route path="/airdrop" exact>
                        <Airdrop />
                    </Route>
                </Switch>
            </SuspenseWithChunkError>
            <ToastListener />
        </Router>
    )
}

export default React.memo(App)
