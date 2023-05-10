import "../css/SecondSection.css";

const items = [
  {
    id: 0,
    title: "Sed ut perspiciatis",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    content:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 2,
    title: "Sed ut perspiciatis",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    content:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
];

function SecondSection() {
  return (
    <div className="second-section">
      <h4 className="second-title">
        Snap photos and share like <br /> never before
      </h4>
      <div className="item-container">
        <Item />
      </div>
    </div>
  );
}

function Item() {
  return items.map((item) => {
    return (
      <div key={item.id}>
        <h4 className="item-title">{item.title}</h4>
        <p className="item-content">{item.content}</p>
        <button className="button learn-more">Learn more</button>
      </div>
    );
  });
}

export default SecondSection;
