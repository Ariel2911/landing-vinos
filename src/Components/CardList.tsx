import { Container } from '@mui/material';
import { CardItem } from './CardItem';

const cards = [
  {
    img: 'https://ucarecdn.com/dc4ed915-96ab-456a-9021-eb65b2e2d2c8/',
    description: 'Lorem, ipsum dolor sit amet consectetur'
  },
  {
    img: 'https://ucarecdn.com/894c5e20-7b66-4bf9-af12-bc525f9ad0b8/',
    description: 'Lorem, ipsum dolor sit amet consectetur'
  },
  {
    img: 'https://ucarecdn.com/9c5030e0-6be7-4720-b90a-25d897a08071/',
    description: 'Lorem, ipsum dolor sit amet consectetur'
  },
  {
    img: 'https://ucarecdn.com/6603d176-7890-4167-bf20-08bb8b1cb66e/',
    description: 'Lorem, ipsum dolor sit amet consectetur'
  },
];

export const CardList = () => {
  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px',
  };

  return (
    <Container
      sx={styleContainer}
    >
      {cards.map((card) => (
        <CardItem key={card.img} card={card} />
      ))}
    </Container>
  );
};