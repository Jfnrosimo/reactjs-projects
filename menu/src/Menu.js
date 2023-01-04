const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className=" my-3 mx-6" key={id}>
            <img
              className=" border-2 border-orange-700 rounded"
              src={img}
              alt={img}
            />
            <div className="py-1 px-3">
              <header className="flex justify-between ">
                <h4 className="text-md font-bold">{title}</h4>
                <h4 className="text-md text-orange-700 font-bold">${price}</h4>
              </header>
              <p className="text-sm">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
