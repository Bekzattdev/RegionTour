import scss from "./JalalPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const JalalPlaces = () => {
  const JalalPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
  ];
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Popular places</h1>
          <div className={scss.blocks}>
            {JalalPlaces.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JalalPlaces;
