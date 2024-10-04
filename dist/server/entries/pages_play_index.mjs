import { i as import1 } from "../chunks/chunk-C0O1Wsd-.js";
import { jsxs, jsx } from "react/jsx-runtime";
/* empty css                       */
import { Container, Autocomplete, TextField, Button } from "@mui/material";
import { reload } from "vike/client/router";
import { u as useData } from "../chunks/chunk-yek7_jXn.js";
import { useEffect, useState } from "react";
import fetch from "node-fetch";
import "react-dom/server";
import "prop-types";
/* empty css                       */
/* empty css                       */
import "vike/server";
const countries = [
  {
    "name": "United States of America",
    "code": "US",
    "adjective": "American"
  },
  {
    "name": "Canada",
    "code": "CA",
    "adjective": "Canadian"
  },
  {
    "name": "Brazil",
    "code": "BR",
    "adjective": "Brazilian"
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "adjective": "British"
  },
  {
    "name": "Germany",
    "code": "DE",
    "adjective": "German"
  },
  {
    "name": "France",
    "code": "FR",
    "adjective": "French"
  },
  {
    "name": "Italy",
    "code": "IT",
    "adjective": "Italian"
  },
  {
    "name": "Spain",
    "code": "ES",
    "adjective": "Spanish"
  },
  {
    "name": "China",
    "code": "CN",
    "adjective": "Chinese"
  },
  {
    "name": "India",
    "code": "IN",
    "adjective": "Indian"
  },
  {
    "name": "Japan",
    "code": "JP",
    "adjective": "Japanese"
  },
  {
    "name": "Australia",
    "code": "AU",
    "adjective": "Australian"
  },
  {
    "name": "Russia",
    "code": "RU",
    "adjective": "Russian"
  },
  {
    "name": "Mexico",
    "code": "MX",
    "adjective": "Mexican"
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "adjective": "South African"
  },
  {
    "name": "South Korea",
    "code": "KR",
    "adjective": "South Korean"
  }
];
function Page() {
  const { pics, country } = useData();
  useEffect(() => {
    console.log(pics);
  }, [pics]);
  const [guess, setGuess] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    console.log(guess);
    if (guess === country) {
      console.log("Correct!");
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    reload();
  };
  return /* @__PURE__ */ jsxs(Container, { maxWidth: "xl", children: [
    /* @__PURE__ */ jsx("h1", { children: "RaceGuessr!" }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: pics[0].properties.url,
        style: { width: "auto", height: "500px" },
        alt: pics[0].properties.title
      }
    ),
    /* @__PURE__ */ jsx(
      Autocomplete,
      {
        value: guess,
        inputValue,
        onChange: (event, newValue) => {
          setGuess(newValue);
        },
        onInputChange: (event, newInputValue) => {
          setInputValue(newInputValue);
        },
        options: countries.map((country2) => country2.name),
        renderInput: (params) => /* @__PURE__ */ jsx(TextField, { ...params, label: "Country", className: "guessInput" })
      }
    ),
    /* @__PURE__ */ jsx(Button, { variant: "contained", color: "primary", onClick: handleSubmit, children: "Submit Guess" })
  ] });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};
const getRandomGender = () => {
  const randomIndex = Math.floor(Math.random() * 2);
  return randomIndex === 0 ? "Man" : "Woman";
};
const data = async (pageContext) => {
  const country = getRandomCountry();
  const query = `${country.adjective} ${getRandomGender()} photo`;
  console.log(query);
  const pictures = await fetch("https://api.search.brave.com/res/v1/images/search?" + new URLSearchParams({
    q: query,
    count: 1,
    spellcheck: 0
  }).toString(), {
    method: "GET",
    headers: {
      // 'Content-Type': 'application/json',
      // 'Accept-Encoding': 'gzip, deflate, br',
      "X-Subscription-Token": "BSA9roh4v3E6BrObKT4Gg9j3Z2k89le"
    }
  });
  const picturesData = await pictures.json();
  return {
    pics: picturesData.results,
    country: country.name
  };
};
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/play/index/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/play/index/+data.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import3
    }
  }
};
export {
  configValuesSerialized
};
