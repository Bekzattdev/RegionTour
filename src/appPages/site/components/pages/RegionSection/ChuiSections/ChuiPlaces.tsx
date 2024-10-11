import scss from "./ChuiPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const ChuiPlaces = () => {
  const OshPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
      title: "Ala-Archa",
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

export default ChuiPlaces;
