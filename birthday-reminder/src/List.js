const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="flex my-3 px-4 py-2 place-items-center">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={image}
              alt={name}
            />
            <div className="mx-3">
              <h4 className="font-bold">{name}</h4>
              <h4>{age} years</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
