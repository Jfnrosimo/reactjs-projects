import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h2 className="text-center m-auto mt-5 border-b-2 border-blue-400 w-1/2">
        our tours
      </h2>
      <div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
