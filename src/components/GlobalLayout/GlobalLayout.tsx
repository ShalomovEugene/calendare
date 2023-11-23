"use client";
import { FC, PropsWithChildren, useEffect, useReducer, useState } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/theme";

import { IGlobalLayoutProps } from "./GlobalLayout.props";
import { GlobalStyle, Wrapper, Main } from "./GlobalLayout.styles.js";
import { ThemeProvider } from "styled-components";
import Header from "../Header/Header";
import { ContextCalendar, mainEventReducer, ContextTypeDate } from "@/context";
import { initializer } from "@/reduer";

const GlobalLayout: FC<IGlobalLayoutProps> = ({
  children,
}: PropsWithChildren<{}>) => {
  const [isDate, setIsDate] = useState<ContextTypeDate["isDate"]>(new Date());
  const [isToggleForm, setIsToggleForm] = useState<boolean>(false);
  const [stateEvent, dispatchEvent] = useReducer(
    mainEventReducer,
    { events: [] },
    initializer
  );

  // const [stateEvent, dispatchEvent] = useReducer(mainEventReducer, {
  //   events: [],
  // });

  useEffect(() => {
    localStorage.setItem("localEvents", JSON.stringify(stateEvent));
  }, [stateEvent]);

  return (
    <ContextCalendar.Provider
      value={{
        isDate,
        setIsDate,
        isToggleForm,
        setIsToggleForm,
        stateEvent,
        dispatchEvent,
      }}
    >
      <StyledComponentsRegistry>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header />
            <Main>{children}</Main>
          </Wrapper>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ContextCalendar.Provider>
  );
};

export default GlobalLayout;
