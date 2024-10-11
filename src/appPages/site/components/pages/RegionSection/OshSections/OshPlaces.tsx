import scss from "./OshPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const OshPlaces = () => {
  const OshPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/e01c/3b37/64d4f3070d55a3d2e5d2796aa8d819f3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKEPLbZjA5tXijPY39AO-yoA6iGieSfWzCWH5uPMqnoEHeeQyvIaauuHt86q7sVXha1K1ueO8Nqo4DHHGkVPGi-EphtFpmMPI6cU0KCvVIyFlpw8JI21aKOr~pmbTjxp-mSLp5zhdDQRB6e2jKSInLCc2usVlAm4U0XE-U22j1ZZCZEfE07OXLVu7u3poUpn7rTIuZ2wKFB6-62WbfVPYphE9Rfqbe-fEZsE6mGM~xCWNy9KbuknhrOBWOCJdIjxnlMDBFOAGDmMdDPNemeLW4SNrld6feLHIquBtoII0dZJOyUyTnlQ4DhTxQQdvVJbhDw~Mf5d2~ZBs9ZwNPQcgQ__",
      title: "Sulaiman-Too",
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

export default OshPlaces;
