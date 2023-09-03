import {create} from 'zustand';
import clothe1 from "@/../public/img/clothes/clothe_1.png";
import clothe2 from "@/../public/img/clothes/clothe_2.png";
import clothe3 from "@/../public/img/clothes/clothe_3.png";
import clothe4 from "@/../public/img/clothes/clothe_4.png";
import clothe5 from "@/../public/img/clothes/clothe_5.png";
import {ICardOmi, IClothe} from "@/app/_types/cards.types";
import body1 from "@/../public/img/bodys/body_1.png";
import body2 from "@/../public/img/bodys/body_2.png";
import body3 from "@/../public/img/bodys/body_3.png";
import body4 from "@/../public/img/bodys/body_4.png";
import {questions} from "@/app/_state/Questions";
import {IBagState, IGood} from "@/app/_types/bag.types";
import {persist} from "zustand/middleware";

interface ICatalogState {
  clothes: IClothe[],
  bodies: ICardOmi[],
}

interface IQuestionsState {
  questions: Array<{ title: string, text: string[] }>,
}

export const useCatalogState = create<ICatalogState>((set) => ({
  clothes: [
    {
      id: 1,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe1,
      price: 149,
      category: 'hats',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 2,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe2,
      price: 149,
      category: 'hats',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 3,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe3,
      price: 149,
      category: 'hats',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 4,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe4,
      price: 149,
      category: 'hats',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 5,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe5,
      price: 149,
      category: 'hats',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 6,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe1,
      price: 149,
      category: 'shirts',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 7,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe2,
      price: 149,
      category: 'shirts',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 8,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe3,
      price: 149,
      category: 'shirts',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 9,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe4,
      price: 149,
      category: 'shirts',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    },
    {
      id: 10,
      collectionId: 1,
      modelCategory: "A",
      rewards: 250,
      imgSrc: clothe5,
      price: 149,
      category: 'shirts',
      stats: [14, 10, 12, 12], resources: [23, 25, 46]
    }
  ],
  bodies: [
    {
      id: 1,
      imgSrc: body1,
      points: 400,
      price: 149,
      modelCategory: 'A',
      quantity: 10000,
      rewards: 900,
      typeClothes: ['A', 'B', 'C']
    },
    {
      id: 2,
      imgSrc: body2,
      points: 400,
      price: 149,
      modelCategory: 'A',
      quantity: 10000,
      rewards: 900,
      typeClothes: ['A', 'B', 'C']
    },
    {
      id: 3,
      imgSrc: body3,
      points: 400,
      price: 149,
      modelCategory: 'A',
      quantity: 10000,
      rewards: 900,
      typeClothes: ['A', 'B', 'C']
    },
    {
      id: 4,
      imgSrc: body4,
      points: 400,
      price: 149,
      modelCategory: 'A',
      quantity: 10000,
      rewards: 900,
      typeClothes: ['A', 'B', 'C']
    }
  ]
}))
export const useQuestionsState = create<IQuestionsState>((set) => ({
  questions: [
    {
      "title": "What is onmi?",
      "text": ["onmi is an innovative AR game that allows players to interact with virtual objects and events in the real world."]
    },
    {
      "title": "Where can I play onmi?",
      "text": ["onmi launches in certain limited areas but our coverage will expand worldwide in due time. Follow us on social media for updates."]
    },
    {
      "title": "Can I play for free?",
      "text": ["The game is free to play for everyone with the ghost system. To get the full potential out of onmi, players are encouraged to acquire an Omi body."]
    },
    {
      "title": "Why AR?",
      "text": ["We utilize AR to enhance the mundane environment, creating unique and thrilling experiences.", "We call it \"philosophy of reality's hidden layer\": Art galleries, conceptual changes to otherwise ordinary places and advanced real-life interactions like clothes fitting and AR collaboration."]
    },
    {
      "title": "Why Fashion?",
      "text": ["onmi is the first game to incorporate the art of digital fashion, letting players express themselves in novel, creative ways.", "Every article of clothing in the game has an in-game value backed by gameplay usecases."]
    },
    {
      "title": "Can I earn in this game?",
      "text": [`<p>Of course. But It depends on many factors, like:</p>
        <ul>
          <li>Your endurance</li>
          <li>Being ahead of the curve</li>
          <li>Your social skills</li>
          <li>Clever resource management</li>
          <li>A tiny bit of luck</li>
        </ul>
        <p>We also offer special programs for talented people to profit off their art in ONMI.</p>`]
    },
    {
      "title": "How does onmi collaborate with offline brands?",
      "text": ["Partner brands can create unique digital goods and experiences for onmi playerbase.", "AR technology allows for expanded interaction with partners' works."]
    },
    {
      "title": "How does onmi's economy work?",
      "text": ["onmi economy is based on tokens and resources that could only be mined by interacting with ORBs. These resources are then placed in circulation and used to create goods to fuel the internal economy.", "Tokens are also circulating in Challenges and mini-games. A certain amount is stored and used for player rewards."]
    },
    {
      "title": "What is \"The Hunger Games\"?",
      "text": ["The Hunger Games is an international competition between worthy onmi players.", "Players all around the world can bet and watch live as the contestants overcome several rounds of challenges. We do not disclose the mechanics beforehand as to keep everyone on equal footing when the games commence.", "The winner will be generously rewarded and will forever be remembered in onmi's hall of fame."]
    },
    {
      "title": "Is onmi a game or a service?",
      "text": ["It's both. Game elements are incorporated in game design mechanics, intriguing quests, standoffs and whole storylines.", "The \"Service\" part is collaborating with brands, artists, clubs and events to provide a system of offline benefits for onmi players."]
    },
    {
      "title": "How do I get clothes?",
      "text": ["Players can craft various articles of clothing and sell on them the market. You can view all available collections and listings on the market.", "onmi doesn't sell in-game clothes with the exception of the starter collection."]
    },
    {
      "title": "Can I buy clothes right away on launch?",
      "text": ["There will be a time before the first clothes are crafted. For players to express themselves, there will be a limited amount unique clothes for sale by onmi. These clothes will not provide gameplay benefits."]
    },
    {
      "title": "What are the differences between Omi bodies?",
      "text": ["There is a difference in stats, upgrade potential and which rarity of clothes they can wear. Higher class bodies will generate more loot for the player and will be much more versatile in the long run."]
    },
    {
      "title": "Why blockchain and crypto?",
      "text": ["Blockchain technology is used for additional security, and transparency for the user's assets and their transactions. It is also used to support the game economy and its players."]
    }
  ]
}))

export const useBagState = create<IBagState>()(
  persist(
    (set) => ({
      bag: [],
      subtotal: 0,
      vat: 0,
      total: 0,
      addToCart: (cartItem: IGood) => set(state => {
        const filterBag = state.bag.filter(el => el.id === cartItem.id)
        if (filterBag.length > 0) {
          return {bag: [...state.bag]}
        } else {
          return {bag: [...state.bag, cartItem]}
        }
      }),
      removeFromCart: (id: number) => set(state => {
        return {bag: state.bag.filter(el => el.id !== id)}
      }),
      changeQuantityGood: (id: number, quantity: number) => set(state => {
        const updatedBag = state.bag.map((item) => {
          if (item.id === id) {
            // Update the quantity of the matching item
            return {...item, quantity: quantity};
          }
          return item;
        });

        return {...state, bag: updatedBag};
      })
    }),
    {
      name: 'bag-storage'
    }
  )
)
