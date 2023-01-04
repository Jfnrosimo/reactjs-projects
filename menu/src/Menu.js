const Menu = ({ items }) => {
  return (
    <div className="lg:flex lg:flex-wrap lg:justify-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className="my-3 mx-6 lg:w-1/3 lg:flex" key={id}>
            <img
              className=" border-2 border-orange-700 rounded lg:w-1/4"
              src={img}
              alt={img}
            />
            <div className="py-1 px-3">
              <header className="flex justify-between border border-b-zinc-800 mt-2">
                <h4 className="text-md font-bold">{title}</h4>
                <h4 className="text-md text-orange-700 font-bold">${price}</h4>
              </header>
              <p className="text-sm first-letter:capitalize">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
