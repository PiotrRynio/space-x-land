import { useLocalStorage } from 'usehooks-ts';

type FavoritesItems = {
  apiItemId: string;
};
export const useFavoritesItems = () => {
  const [favoritesItems, setFavoritesItems] = useLocalStorage<FavoritesItems[]>(
    'favoritesItems',
    [],
  );

  const isFavoritesItems = (itemId: string): boolean =>
    favoritesItems.findIndex(({ apiItemId }) => apiItemId === itemId) !== -1;

  const addFavoritesItems = (newItemId: string) => {
    if (!isFavoritesItems(newItemId)) {
      const newLocalState = [...favoritesItems];
      newLocalState.push({ apiItemId: newItemId });
      setFavoritesItems(newLocalState);
    }
  };

  const removeFavoritesItems = (itemId: string) => {
    const indexOfItemIdInStorage = favoritesItems.findIndex(
      ({ apiItemId }) => apiItemId === itemId,
    );

    if (indexOfItemIdInStorage !== -1) {
      const newLocalState = [...favoritesItems];
      newLocalState.splice(indexOfItemIdInStorage, 1);
      setFavoritesItems(newLocalState);
    }
  };

  return { favoritesItems, isFavoritesItems, addFavoritesItems, removeFavoritesItems };
};
