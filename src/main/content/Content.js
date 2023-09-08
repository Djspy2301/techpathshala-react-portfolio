import "./Content.css";
const Content = () => {
  return (
    <>
      <H6 />
      <Name />
      <Intro />
    </>
  );
};

const H6 = () => {
  return <h6>THIS IS ME</h6>;
};

const Name = () => {
  return <h1>PHILIP GILBERT</h1>;
};

const Intro = () => {
  return (
    <div className="para">
      <p>
        You will begin to realise why this exercise is called the Dickens
        Pattern with reference to the ghost showing Scrooge some different
        futures.
      </p>
    </div>
  );
};
export default Content;
