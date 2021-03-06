import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { AnimatedSwitch } from "react-router-transition";

import { store } from "./redux/store";
import { DataWrapper } from "./redux/DataWrapper";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { Contact } from "./components/views/Contact/Contact";
import { Products } from "./components/views/Products/Products";
import { ProductView } from "./components/views/ProductView/ProductView";
import { About } from "./components/views/About/About";
import { NotFound } from "./components/views/NotFound/NotFound";

import "./styles/font.scss";
import "./styles/global.scss";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#c2ffff" },
    secondary: { main: "#324b4b" },
    success: { main: "#00C598" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DataWrapper>
            <MainLayout>
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switchWrapper"
              >
                <Route exact path="/" component={Homepage} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/product/:id" component={ProductView} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
              </AnimatedSwitch>
            </MainLayout>
          </DataWrapper>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
