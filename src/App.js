import Accordion from "./Components/Accordion";

function App() {
  const items = [
    {
      id:1,
      label: 'Can I use React for a website',
      content: 'You can use React on any website you want to create'
    },
    {
      id:2,
      label: 'Can I use CSS for a website',
      content: 'You can use CSS on any website you want to create'
    },
    {
      id:3,
      label: 'Can I use JavaScript for a website',
      content: 'You can use JavaScript on any website you want to create'
    }
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  )
}

export default App;
