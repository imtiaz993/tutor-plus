import { SET_ERROR, SET_LOADING, SET_TUTOR } from './TutorTypes'
import { createContext, Dispatch, FC, Reducer, useContext, useReducer } from 'react'

/** TutorProfile Context interfaces */

interface TutorContextProps { children: React.ReactNode }

interface TutorState {
  tutor: any;
  loading: boolean;
  error: string | null;
}

type TutorAction = { type: 'SET_TUTOR'; payload: any } | { type: 'SET_LOADING'; payload: boolean } | { type: 'SET_ERROR'; payload: string };

interface TutorContextType {
  state: TutorState;
  dispatch: Dispatch<TutorAction>;
}

//intial tutor states 

const initialTutorState: TutorState = {
  tutor: null ,
  loading: false,
  error: null,
}

export const TutorContext = createContext<TutorContextType>({ state: initialTutorState, dispatch: () => null });

export const TutorProfileProvider: FC<TutorContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(tutorReducer, initialTutorState);

  return (
    <TutorContext.Provider value={{ state, dispatch }}>
      {children}
    </TutorContext.Provider>
  )
}

/** Reducer and state change logic  */

const tutorReducer: Reducer<TutorState, TutorAction> = (state, action) => {
    switch (action.type) {
      case SET_TUTOR: {
        return { ...state, tutor: action.payload, loading: false, error: null };
      }
      case SET_LOADING:
        return { ...state, loading: action.payload, error: null };
      case SET_ERROR:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
