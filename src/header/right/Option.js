import "./Option.css";
const Option = () => {
  return (
    <div className="text">
      <ul>
        <List option="Home" />
        <List option="About" />
        <List option="Service" />
        <List option="Portfolio" />
        <List option="Pricing" />
        <List option="Blog" />
        <List option="Pages" />
        <List option="Contact" />
      </ul>
    </div>
  );
};

const List = (prop) => {
  return (
    <ul>
      <li>
        <Anchor a={prop.option} />{" "}
      </li>
    </ul>
  );
};

const Anchor = (prop) => {
  return <a href="">{prop.a}</a>;
};
export default Option;
