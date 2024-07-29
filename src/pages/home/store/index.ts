import { create } from "zustand";
import { ContactType } from "../../../types/contact";

interface State {
  contacts: ContactType[];
  frequentlyVisited: Record<number, ContactType>;
}

interface Actions {
  setContacts: (contacts: ContactType[]) => void;
  setFrequentlyVisited: (contact: ContactType) => void;
}

type Store = State & Actions;

const initialState: State = {
  contacts: [],
  frequentlyVisited: {},
};

const useStore = create<Store>((set) => ({
  ...initialState,
  setContacts: (contacts) =>
    set((state) => ({
        ...state,
       contacts,
    })),
  setFrequentlyVisited: (contact) =>
    set((state) => ({
      frequentlyVisited: {
        ...state.frequentlyVisited,
        [contact.id]: contact,
      },
    })),
}));

export default useStore;
