import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import { PostEdit } from "./components/views/PostEdit/PostEdit";
import { About } from "./components/views/About/About";
import { NotFound } from "./components/views/NotFound/NotFound";

import "./styles/font.scss";
import "./styles/global.scss";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2B4C6F" },
    typography: {
      fontFamily: "Nunito, Arial",
    },
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
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/post/:id/edit" component={PostEdit} />
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
