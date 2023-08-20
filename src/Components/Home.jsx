import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Օնլայն Գնումներ</h1>
        <p>
          Կատարե՛ք Ձեր գնումներն <em>Smail</em> խանութից առցանց, առնվազն 10000 ՀՀ դրամի և ստացե՛ք առաքման ծառայություն՝ Հաղարծնից մինչև 10 կմ-ը ԱՆՎՃԱՐ:
        </p>
        <Link to="/products" className="btn btn-default">
          Կատարել գնումներ
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt="Home image"
      />
    </div>
  );
}