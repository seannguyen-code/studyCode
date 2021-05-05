import { useState } from "react";
import { ThemeProvider } from "styled-components";

import MyButton from "./elements/MyButton";
import MyHeader from "./elements/MyHeader";
import MySection from "./elements/MySection";
import MaterialButton from "./elements/MaterialButton";
import PageWrapper from "./elements/PageWrapper";
import { BlueTheme, GreenTheme } from "./theme/theme";

const App = () => {
  const pages = [
    {
      title: "page1",
      buttons: [{ text: "next" }],
    },
    {
      title: "page2",
      buttons: [{ text: "prev" }, { text: "next" }],
    },
    {
      title: "page3",
      buttons: [{ text: "prev" }, { text: "next" }],
    },
    {
      title: "page4",
      buttons: [{ text: "prev" }],
    },
  ];
  const [id, setId] = useState(0);
  let pageDisplay = pages[id];

  const buttonChangePageHandler = (index) => {
    if (id === 0 && index === 0) {
      setId(id + 1);
    } else if (index === 0) {
      setId(id - 1);
    } else {
      setId(id + 1);
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={GreenTheme}>
        <div>
          <MySection>
            <MyHeader>{pageDisplay.title}</MyHeader>
            <PageWrapper pageId={id} nthPage={pages.length}>
              {pageDisplay.buttons.map((btn, i) => (
                <MyButton key={i} onClick={() => buttonChangePageHandler(i)}>
                  {btn.text}
                </MyButton>
              ))}
            </PageWrapper>
            {/* <MyButton primary={2}>MyButton</MyButton>
          <MyButton primary={1}>MyButton</MyButton>
          <MaterialButton>MaterialButton</MaterialButton> */}
          </MySection>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
