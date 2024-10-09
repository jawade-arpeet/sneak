import { useRecoilStateLoadable } from "recoil";
import sneakersAtomState from "../store/atoms";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Home() {
  const [sneakers] = useRecoilStateLoadable(sneakersAtomState);

  switch (sneakers.state) {
    case "loading":
      return <div>Loading...</div>;
    case "hasError":
      return <div>Error</div>;
    case "hasValue":
      console.log(sneakers.contents);
      return (
        <div className="px-4">
          <header className="px-6 py-4 lg:px-8 lg:py-6">
            <nav className="flex items-center justify-between">
              <Link to={"/"}>sneak</Link>
              <User />
            </nav>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {sneakers.contents.map((sneaker) => {
              return (
                <Link to={sneaker._id} key={sneaker._id} className="hover:-m-2 hover:border hover:border-gray-300">
                  <img src={sneaker.imgURL} alt="adidas-gazelle-indoor" />
                  <div className="p-4">
                    <h1 className="text-sm font-medium">{sneaker.brand}</h1>
                    <h1 className="font-semibold text-lg">{sneaker.name}</h1>
                    <h4 className="font-semibold">{`MRP ${sneaker.price}`}</h4> 
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
  }
}

export default Home;
