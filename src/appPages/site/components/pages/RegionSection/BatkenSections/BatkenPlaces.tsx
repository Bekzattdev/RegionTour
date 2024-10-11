import scss from "./BatkenPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const BatkenPlaces = () => {
  const OshPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
      title: "Canyon-Tale",
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
            {OshPlaces.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatkenPlaces;
