import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Cart from './Cart';
import Card from './Card';






function App() {
  let movies = [
    {
      id: 1,
      name: "Da Da",
      poster: "https://pbs.twimg.com/media/FlXSHb8agAEFcJP?format=jpg&name=900x900",
      rating: 8.5,
      summary:
        "Dada movement consisted of artists who rejected the logic, reason, and aestheticism of modern capitalist society, instead expressing nonsense, irrationality, and anti-bourgeois protest in their works.",
      price: "180",
      amount: 1
    },
    {
      id: 2,
      name: "Varisu",
      poster: "https://images.cinemaexpress.com/uploads/user/ckeditor_images/article/2022/6/22/varisu_third_look.jpg?w=400&dpr=2.6",
      rating: 7.6,
      summary:
        "Vijay Rajendran is a happy-go-lucky man, but everything changes after the unexpected death of his foster father.",
      price: "210",
      amount: 1
    },
    {
      id: 3,
      name: "Thunivu",
      poster: "https://pbs.twimg.com/media/FdLlh6saEAAFBHL?format=jpg&name=small",
      rating: 8.5,
      summary:
        "A criminal mastermind and his team form a plan and commit bank heists across Chennai, but the motive of their heists remains mysterious.",
      price: "210",
      amount: 1
    },
    {
      id: 4,
      name: "Vikram",
      poster: "https://pbs.twimg.com/media/FXIMYVtaAAAIKPN.jpg",
      rating: 9.6,
      summary:
        "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.The film stars Kamal Haasan,Fahadh Faasil and Vijay Sethupathi.Kalidas Jayaram,Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance as Rolex.  ",
      price: "250",
      amount: 1
    },
    {
      id: 5,
      name: "K.G.F: Chapter 2",
      poster: "https://editzstock.com/wp-content/uploads/2022/04/Rocking-Star-Yash-KGF-Chapter-2-Hd-Wallpaper-Background-Download-Free.jpg",
      rating: 8.4,
      summary:
        "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj.  ",
      price: "250",
      amount: 1
    },
    {
      id: 6,
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      price: "210",
      rating: 8.8,
      amount: 1
    },
    {
      id: 7,
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      price: "210",
      amount: 1
    },

    {
      id: 8,
      name: "RRR",
      poster:
        "https://i.pinimg.com/736x/d0/16/31/d0163192f486c344981bdf60d38e3bd0.jpg",
      rating: 9.2,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      price: "190",
      amount: 1
    },
    {
      id: 9,
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      price: "130",
      amount: 1
    },
  

    {
      id: 11,
      name: "Bommai Nayagi",
      rating: 9.8,
      summary:
        "The film is based on the life of a small family with no big aspirations. Yogi Babu plays Velu, a worker in a tea shop in Cuddalore. The film opens with a beautiful shot of Velu waking up from his sleep and lying next to him are his wife and his nine-year-old daughter Bommai Nayagi, who is named after the family God",
      poster:
        "https://media-cache.cinematerial.com/p/500x/orszhal4/bommai-nayagi-indian-movie-poster.jpg?v=1660193471",
      price: "150",
      amount: 1
    },

    {
      id: 12,
      name: "Michael ",
      poster:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2022/05/Michael-322x536.jpg",
      rating: 8,
      summary:
        "As gangs battle over turf, a youngster dreams of ruling everything and decides to take control of the area.",
      price: "130",
      amount: 1
    }
  ];

  const [cartItems,setCartItems]= useState([])
  let addToCart =(movies) => {
      setCartItems([...cartItems,movies])
  }

  let removeFromCart = (movies) => {
   const indexVal = cartItems.findIndex(obj => obj.id === movies.id)  
   cartItems.splice(indexVal,1);
   setCartItems([...cartItems])

  }
  return (
    <BrowserRouter>
      <div className="App">
        <body >
          <NavBar />
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart cartItems={cartItems}removeFromCart={removeFromCart}  />} ></Route>
            <Route path="/" element={ <div className="container " >
            <div className="row ">
              <div className="col-lg-12">
                <div className="row">
                  {
                    movies.map((movies, index) => {
                      return <Card movies={movies} addToCart={addToCart} cartItems={cartItems}/>
                    })
                  }

                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div> } ></Route>
          </Routes>
          
          <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; 2023</p></div>
          </footer>

        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
