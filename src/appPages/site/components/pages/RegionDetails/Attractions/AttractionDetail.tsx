"use client";
import scss from "./AttractionDetail.module.scss";

const AttractionsDetail = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Rukh Ordo Cultural Center</h1>
          <div className={scss.detail}>
            <div className={scss.detailImg}>
              <img
                src="https://s3-alpha-sig.figma.com/img/67ac/f22c/c8b890880ffe331867da339106c002f1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JxrBquUmYJrPUONWuLSdv2hYyG-e1WVt6plUDmc7KQTNQKwplp~ffeUTMND5qFLTtjrIlY0FyhW2qtoKq7UoUxRYUxIPkZXd245cruZ5cBHb8S-L3ET8~fLZC1uWfrTRVjpzVatk5cCazLjeO74Ef7T-s0jogYFPX6cV38b8FecmuEA4lvcf8oblmKeZESAKWcAWrPc5gYTAF3AZARxWdaaJrtuIHOXEU5-x7B7GMTl7pCHjIOU8B8AP-2AJI4iRmIUqYSf9MkLEsUJU5cViL2UXzv~wN8NW6qbgeUxNhzCPsab92y~8xHd9Xfmuafw1KSHF61HmbTk5F0gzOiJlWA__"
                alt=""
              />
              <div className={scss.smallImg}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/e981/62c9/62f3de2bb805600b10a9bee9dfba4b37?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RpZMAa6RsTEI2d776v1p1kmvaifwtQI1Fn5DuVKUQGlcDgjRdE0Gs3zRTHMJs2T2G8r6au2WbGfUq2NrQAK8SsLFDLVph47Y4tGgG3AqRLrjNZsvbuwTwPo1QfeivxslZPxQ3mwKmFiYsaw5Ndp7oil8waLuB0OcCwKvcEa8G~MoVjlwO--ljHK3y-dM5BD2ZqxNxzqDR6OIKYgbthHWZPnSR75KC~gJJKxfARNQBK8USj6vIZb3WhKvjqLL00gdd98jMCrvbBk68aSoklVpP4JOx-IpFLd6SYGx~KZndTrDrmfULCqTOOPzUGhsqSVc2Y2f29jHt38gIjZdVMPUyA__"
                  alt=""
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/b0f0/a2bb/133124cfab41e67066070cdc3995e62b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giypngE0hrZ0e7Rb5wtHa2P4qgGkvE30EIrroF6Qk-psYrLGp1uic6WPLN7HwRYmlTDwGFb-L3MEkYwQa72eJT5KCxtfWQgvWGpmOcMulw7XKPUcNaiUXGg5u0uel05S2G6SawnKlO7EucWApzwScW2N~PYAj-tGWHDW-rMnHo8ErZELxtnkfO-aD-GrlDxOims9KqboNRyUDmok2ElMHJPzsXbKI5h1kjvMYfKbufPNsWKmYlexBOyCq6afgoXz6~-p6DUpg-7RITlXjLxIvvAfWGMIMJJI2EDNmjc9RwLuPNqlrfSpNBUyaasbDRH1AkIDbMH3CTBYQZBWH7SyhA__"
                  alt=""
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/c3c6/8b6b/dc306f2c8600efde8ed91e1a1137c048?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UarwD4ug-3WXkIdRG7Jh68oQam50HKZR3HBFmwXpdBPbAyRKjQx5GxbwPddoYP1I4mulvhUntBsXztQWte84Tm5X9QsFjmq8TJ-mzmc3AI0nsNt5D1~rXl5kY-tB6Lb1CHVgYxOS1Znjk-w0Qc2ZcEtfjam19xv68APfHrDkup022Bg1kiJpw2YrV89PZ3oE3a~OtaqB1ipZ92KUaXKIprNJ1XCh7W00nC8FXEWlrapm1pwp171Hqg9bQikm5SG~KrtsvSj4yd-1WbvKE8OALzQBmiuWpD-k7uYVW7kJLHmyyzIbOdRkSYwOp6-9rNA6Sf7XhrCgjGeh3US86tK0xA__"
                  alt=""
                />
              </div>
            </div>
            <div className={scss.detailText}>
              <p>
                The Rukh Ordo Cultural Center named after Ch.Aitmatov is a
                complex on the northern shore of Issyk—Kul Lake, in the city of
                Cholpon-Ata. The complex is named after one of the most famous
                Kyrgyz in the world — Chingiz Torekulovich Aitmatov. There are 5
                chapels built on the territory of the complex in honor of the 4
                main denominations of the world: Christianity, Islam, Buddhism,
                Judaism, while Christianity is represented by two chapels —
                Pravoslav.
              </p>
              <h5>139 reviews</h5>
              <h5>Administrative centers</h5>
              <h5>Top 1 of 20 entertainment in Cholpon-Ata</h5>
              <h5>Contacts</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsDetail;
