import React from "react";
import FlexContainer from "./components/FlexContainer";
import Search from "./components/Search";

function Home() {
  return (
    <main>
      <FlexContainer className="xs:flex-col xs:max-w-sm">
        <div className="text-center">
          <h1 className="mt-16 text-4xl">
            Banned Prison Books is a tool for finding books that have been
            banned in state prison systems.
          </h1>
          <p className="opacity-50 mt-4">
            Search for books below. Or, explore the API.
          </p>
        </div>
        <Search />
      </FlexContainer>
    </main>
  );
}
export default Home;
