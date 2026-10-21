import { useState } from "react";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  // let tabContent = 'Please click a button!';
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  function handleSelect(selectedButton){
    // console.log(`You clicked the ${selectedButton} button`);
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton.toLowerCase());
  }

  let topicOutput = "Please select a topic!"
  if (selectedTopic) {
    topicOutput = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {/* Map-elésnél kell egy 'key't adni a hívásnál, különben errort dob */}
            { CORE_CONCEPTS.map( concept => <CoreConcept key={concept.title} {...concept} />) }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')} isActive={selectedTopic==='components'}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')} isActive={selectedTopic==="jsx"}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')} isActive={selectedTopic==="props"}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')} isActive={selectedTopic==="state"}>State</TabButton>
          </menu>
          <div id="tab-content">{topicOutput}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
