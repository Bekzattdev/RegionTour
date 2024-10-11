import scss from "./TalasPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const TalasPlaces = () => {
  const TalasPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
      title: "Burana",
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
            {TalasPlaces.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalasPlaces;
