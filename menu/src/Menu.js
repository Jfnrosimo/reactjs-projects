const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id}>
            <img src={img} alt={img} />
            <div>
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
