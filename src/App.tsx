import React, { useState } from 'react';
import { Typography } from 'antd';
import './App.css';
import { CardData, CreateCardData} from "./types";
import { motion, AnimateSharedLayout } from 'framer-motion';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
const { Title } = Typography;

const App = () => {
  const [cardData, setCardData] = useState(cardDataArray);

  const handleAddNewCard = (createCardData: CreateCardData) => {
    const id = cardData.length + 1;
    const randomImage = Math.floor(Math.random() * 3) + 1;
    console.log(createCardData);
    const newCard: CardData = {
      id: id,
      authorName: createCardData.authorName,
      authorImage: `images/${randomImage}.jpg`,
      title: createCardData.title,
      content: createCardData.content
    }
    console.log(newCard);
    setCardData([...cardData, newCard])
  }

  const handleDeleteCard = (id: number): any => {
    const newCardData: CardData[] = cardData.filter((value, index) => {
      return index !== id;
    })
    return (e: any) => {
      setCardData(newCardData);
    }
  }


  return (
    <div>
      <div className="header">
        <Header />
        <CommentForm handleAddNewCard={handleAddNewCard} />
      </div>
      <AnimateSharedLayout>
        <motion.ul layout className="comment-container">
          {cardData.map((card, index) => {
            return <CommentCard
              key={index}
              card={card}
              deleteCard={handleDeleteCard(index)}
            />
          })}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  )
}

const Header = () => {
  return (
    <Title className="white">Mottion</Title>
  )
}
export default App;

const cardDataArray: CardData[] = [
  {
    id: 1,
    authorName: "Jakub Szpak",
    authorImage: "images/1.jpg",
    title: "Kayne Kanye Kanye",
    content: "Lmao"
  },
  {
    id: 2,
    authorName: "Melon Kask",
    authorImage: "images/2.jpg",
    title: "DogeCoin to the moon 🚀 ",
    content: "HOLD!"
  },
  {
    id: 3,
    authorName: "Joma Tech",
    authorImage: "images/3.jpg",
    title: "New video up 🎥",
    content: "Go watch it!"
  }
];